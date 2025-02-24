import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutPage from "./pages/common/About";
import NotFoundPage from "./pages/NotFound";
import ProgramPage from "./pages/common/Program";
import ContactPage from "./pages/common/Contact";
import InitPage from "./pages/common/Init";
import LoginPage from "./pages/user/login/Login";
import AuthPage from "./pages/user/login/Auth";
import Mypage from "./pages/user/mypage/Mypage";
import RoomDetailPage from "./pages/user/RoomDetail";
import TermsOfServicePage from "./pages/user/login/TermsOfSevice";
import WithdrawalAccountPage from "./pages/user/mypage/WithdrawalAccount";
import RecheckWithdrawalPage from "./pages/user/mypage/RecheckWithdrawal";
import ReservationPage from "./pages/user/Reservation";

import RootLayout from "./components/layout/RootLayout";
import MyHomesPage from "./pages/user/MyHomes";

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          {/* <Route element={<LoginLayout />}> */}
          <Route path="/" element={<InitPage />} />
          {/* 신규 유저 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/auth" element={<AuthPage />} />
          <Route path="/login/terms" element={<TermsOfServicePage />} />
          {/* </Route> */}
          {/* <Route element={<MainLayout />}> */}

          {/* 기존유저 */}
          <Route path="/main/home" element={<MyHomesPage />} />
          <Route path="/main/home/:homeId/rooms/:roomId" element={<RoomDetailPage />} />
          {/* 마이페이지 */}
          <Route path="/mypage/account" element={<Mypage />} />
          <Route path="/mypage/account/withdraw" element={<WithdrawalAccountPage />} />
          <Route path="/mypage/account/withdraw/recheck" element={<RecheckWithdrawalPage />} />
          {/* 소개 */}
          <Route path="/about" element={<AboutPage />} />
          {/* 예약 */}
          <Route path="/reservation" element={<ReservationPage />} />
          {/* 프로그램 */}
          <Route path="/program" element={<ProgramPage />} />
          {/* contact */}
          <Route path="/contact" element={<ContactPage />} />

          <Route path="*" element={<NotFoundPage />} />
          {/* </Route> */}
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
