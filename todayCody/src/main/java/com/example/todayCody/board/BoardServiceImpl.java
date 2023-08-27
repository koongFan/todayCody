package com.example.todayCody.board;

import com.example.todayCody.common.util.FileUtil;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Log4j2
@Service("boardService")
public class BoardServiceImpl implements BoardService {
  @Value("${upload.path}")
  private String uploadPath;
  @Autowired
  private BoardDAO boardDAO;

  @Override
  public Map<String, Object> boardWrite(BoardDTO boardDTO, List<MultipartFile> aMultipartFile) throws Exception {
    Map<String, Object> retMap = new HashMap<>();
    try {
      ArrayList<?> fileInfoList = (ArrayList<?>) boardDTO.getFile_info();
      int newBoardSeq = boardDAO.insertBoard(boardDTO);
      log.info("새로운 게시글 번호 : " + newBoardSeq);
      log.info("fileInfoList=[" + fileInfoList + "]");

      if (aMultipartFile.size() != 0) {
        int fileIdx = 0;
        for (Object fileInfo : fileInfoList) {
          HashMap<String, Object> fileInfoMap = (HashMap<String, Object>) fileInfo;
          fileInfoMap.put("board_seq", newBoardSeq);
          fileInfoMap.put("image_path", "/boards/board_" + newBoardSeq + "/images/" + fileInfoMap.get("file_name") + "/");
          String fileName = (String) fileInfoMap.get("file_name");
          if (fileName != null && !fileName.isEmpty() && "file[]".equals(aMultipartFile.get(fileIdx).getName())) {
            String savedFileName = FileUtil.uploadFile(uploadPath + "board/board_" + newBoardSeq + "/images", aMultipartFile.get(fileIdx));
            log.info("[파일 저장 성공] 저장된 파일명 : " + savedFileName);
            String[] fileSplitArr = savedFileName.split("\\.");
            fileInfoMap.put("file_name", fileSplitArr[0]);
            fileInfoMap.put("ext_name", fileSplitArr[1]);
            fileIdx++;
          }
          boardDAO.insertFileInfo(fileInfoMap);
        }
      }

      retMap.put("retCode", "000");
      retMap.put("retMsg", "정상적으로 등록되었습니다.");

    } catch (Exception e) {
      retMap.put("retCode", "999");
      retMap.put("retMsg", "에러가 발생했습니다: " + e.getMessage());
    }
    return retMap;

  }

  @Override
  public List<BoardDTO> getBoardList(BoardDTO boardDTO) throws Exception {
    if(boardDTO.getSort_tp() == null) {
      boardDTO.setSort_tp("1");
    }

    return boardDAO.getBoardList(boardDTO);
  }

  @Override
  public List<Map<String,Object>> getBoardLFileist(BoardDTO boardDTO) throws Exception {
    return boardDAO.getBoardFileList(boardDTO);
  }

  @Override
  public BoardDTO getBoardDetail(BoardDTO boardDTO) throws Exception {
    return boardDAO.getBoardDetail(boardDTO);
  }

  @Override
  public Map<String, Object> boardEdit(BoardDTO boardDTO, List<MultipartFile> aMultipartFile) throws Exception {
    return null;
  }

  @Override
  public Map<String, Object> boardDelete(BoardDTO boardDTO) throws Exception {
    return null;
  }
}
