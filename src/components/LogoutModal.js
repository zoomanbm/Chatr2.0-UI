import React from 'react';

function LogoutModal(props) {
  const authStore = props.authStore;
  return (
    <div className="modal fade"
      tabIndex="-1"
      id="logoutModal"
      role="dialog"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Ready to Leave?</h5>
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div className="modal-footer">
            <button className="btn btn-secondary"
              type="button"
              data-dismiss="modal">
              Cancel
            </button>
            <button className="btn btn-primary"
              type="button"
              data-dismiss="modal"
              onClick={() => {authStore.logout()}}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
