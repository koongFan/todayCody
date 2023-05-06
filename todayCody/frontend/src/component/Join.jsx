import styles from '../component/Join.module.css';

function Join() {
  return(
    <>
    <div className={styles.join}>
      <h1>회원가입</h1>
      <form>
        <input type="text" placeholder="아이디를 입력하세요" />
        <input type="password" placeholder="비밀번호를 입력하세요" />
        <input type="submit" value="회원가입" />
      </form>
    </div>
    </>
  );
}

export default Join;