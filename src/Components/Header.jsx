import React from 'react';

const Header = (props) => {
  return (
    <header class="bg-dark py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
          <h1 class="display-4 fw-bolder">Just Do It !</h1>
          <p class="lead fw-normal text-white-50 mb-0">
            LEAVE YOURSELF IN THE DUST
          </p><br />
          <p class="lead fw-normal text-white-50 mb-0">
            Marathon speed to push beyond what you thought possible.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;