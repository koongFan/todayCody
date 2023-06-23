import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div class="middle-sidebar">
        <ul class="sidebar-list">
          <li class="sidebar-list-item active">
            <Link to="#" class="sidebar-link">
              <svg
                class="sidebar-icon"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <g>
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
                </g>
              </svg>
              <div class="hidden-sidebar">Dashboard</div>
            </Link>
          </li>
          <li class="sidebar-list-item">
            <Link to="#" class="sidebar-link">
              <svg
                viewBox="0 0 24 24"
                class="sidebar-icon"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <g>
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path>
                </g>
              </svg>
              <div class="hidden-sidebar">Content</div>
            </Link>
          </li>
          <li class="sidebar-list-item">
            <Link to="#" class="sidebar-link">
              <svg
                class="sidebar-icon"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <g>
                  <path d="M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z"></path>
                </g>
              </svg>
              <div class="hidden-sidebar">Playlists</div>
            </Link>
          </li>
          <li class="sidebar-list-item">
            <Link to="#" class="sidebar-link">
              <svg
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                class="sidebar-icon"
              >
                <g>
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path>
                </g>
              </svg>
              <div class="hidden-sidebar">Analytics</div>
            </Link>
          </li>
          <li class="sidebar-list-item">
            <Link to="#" class="sidebar-link">
              <svg
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                class="sidebar-icon"
              >
                <g>
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                </g>
              </svg>
              <div class="hidden-sidebar">Comments</div>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
