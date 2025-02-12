export default function Footer() {
  return (
    <footer className="w-full flex justify-between fixed bottom-0 text-xs md:text-sm text-center font-light inset-x-0 py-2 bg-stone-800 text-white">
      {/* 기존 */}
      {/* <p>ARCHIVE OF ONGR Co.&copy; 2022 ALL RIGHT RESERVED.</p> */}
      {/* 올바른 저작권 표시법 ⓒ 2021.회사명 Co., Ltd. All rights reserved.*/}
      <div className="invisible w-[100px]"></div>
      <p>&copy; 2022 ARCHIVE OF ONGR Co. ALL RIGHT RESERVED.</p>
      <div className="flex gap-5 pr-10">
        <span>이용약관</span>
        <span>개인정보처리방침</span>
      </div>
    </footer>
  );
}
