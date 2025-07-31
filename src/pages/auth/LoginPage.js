import React, { useState, useRef, useEffect } from 'react';
import PandaSVG from '../../components/PandaSVG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/LoginPage.css'

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
    passwordRef.current.focus();
  };

  // Mắt
  const moveEyes = () => {
    const input = usernameRef.current;
    const caretPos = input.selectionStart || 0;
    const charWidth = 8;
    const rect = input.getBoundingClientRect();
    const caretX = rect.left + 10 + caretPos * charWidth;

    const leftPupil = document.getElementById('leftPupil');
    const rightPupil = document.getElementById('rightPupil');
    const leftEyeCenter = leftPupil.getBoundingClientRect();
    const rightEyeCenter = rightPupil.getBoundingClientRect();
    const inputCenterY = rect.top + rect.height / 2;
    const maxPupilOffset = 6;

    const calcOffset = (eyeCenterX, eyeCenterY) => {
      let dx = caretX - eyeCenterX;
      let dy = inputCenterY - eyeCenterY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > maxPupilOffset) {
        dx = (dx / dist) * maxPupilOffset;
        dy = (dy / dist) * maxPupilOffset;
      }
      return { dx, dy };
    };

    const { dx: dxL, dy: dyL } = calcOffset(leftEyeCenter.left + 8, leftEyeCenter.top + 8);
    const { dx: dxR, dy: dyR } = calcOffset(rightEyeCenter.left + 8, rightEyeCenter.top + 8);

    leftPupil.style.transform = `translate(${dxL}px, ${dyL}px)`;
    rightPupil.style.transform = `translate(${dxR}px, ${dyR}px)`;
  };

  const resetEyes = () => {
    document.getElementById('leftPupil').style.transform = 'translate(0, 0)';
    document.getElementById('rightPupil').style.transform = 'translate(0, 0)';
  };

  const coverEyes = () => {
    ['leftHand', 'rightHand', 'leftEyeLid', 'rightEyeLid'].forEach((id) =>
      document.getElementById(id)?.classList.add('cover')
    );
  };

  const uncoverEyes = () => {
    ['leftHand', 'rightHand', 'leftEyeLid', 'rightEyeLid'].forEach((id) =>
      document.getElementById(id)?.classList.remove('cover')
    );
  };

  useEffect(() => {
    uncoverEyes();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="container max-w-md w-full bg-white rounded-xl shadow-lg p-8 relative font-poppins">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>

        {/* Panda */}
        <div className="panda-wrapper mx-auto mb-6">
          {/* === Panda SVG được tách vào file LoginPage.css để gọn === */}
          <PandaSVG />
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block font-semibold mb-1 text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              ref={usernameRef}
              name="username"
              placeholder="Enter your username"
              autoComplete="off"
              onInput={moveEyes}
              onClick={moveEyes}
              onKeyUp={moveEyes}
              onBlur={resetEyes}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block font-semibold mb-1 text-gray-700">
              Password
            </label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              ref={passwordRef}
              name="password"
              placeholder="Enter your password"
              autoComplete="off"
              onFocus={() => !passwordVisible && coverEyes()}
              onBlur={() => !passwordVisible && uncoverEyes()}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg text-lg transition"
          >
            Login
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 mt-4">
          Chưa có tài khoản?{' '}
          <button
            type="button"
            className="text-blue-600 hover:underline font-medium bg-transparent border-none p-0 cursor-pointer"
            onClick={() => {
              // TODO: handle register navigation
            }}
          >
            Đăng ký tài khoản
          </button>
        </div>
      </div>
    </div>
  );
};


export default LoginPage;
