import React from 'react'
//import DefaultLayout from '../../layout/DefaultLayout'
import Logo from '../../images/logo/imagetest.svg'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
     <div className='md:p-16'>
        <div className="containerBox">
        <div className="mainBox">
          <div className="width-left">
            <div className="space-blockLeft">
              <Link className='mb-5.5 inline-block' to='/'>
                <img className="hidden dark:block" src={Logo} alt="Logo" />
              </Link>
              <span className="mt-15 inline-block">
              <img src={Logo} alt="Logo" />
              </span>
            </div>
          </div>
          <div className="width-right">
            <div className="space-right">
              <h2 className="title">
                Forgot Password
              </h2>
              <form>
                <div className="mb-4">
                  <label className="input-label">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="input-box"
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Reset"
                    className="btn-main"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>

  )
}

export default ForgotPassword
