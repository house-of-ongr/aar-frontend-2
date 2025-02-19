import API_CONFIG from "../config/api";
import { SoundSource } from "../types/sound";
import { formatDate } from "../utils/formatDate";
import WaveformWithAudio from "./Waveform";

type PreviewContent = {
  data: SoundSource;
};

export default function PreviewContent({ data }: PreviewContent) {
  const { name, description, audioFileId, updatedDate } = data;

  return (
    <div className="flex flex-col md:flex-row gap-5 text-black px-7 min-h-[600px] min-w-[1000px]  ">
      <div className="fixed mt-2 flex  gap-2 items-end">
        <img
          className=""
          src="/images/logo/logo_for-dark-bg.png"
          alt="아카이브 오브 옹알 로그"
          width={30}
          height={30}
        />
        <span className="text-xs text-gray-300">아카이브 오브 옹알</span>
      </div>

      <div className="w-1/2 relative flex-center ">
        {/* 포스트잇 섹션 */}
        <div
          className="absolute bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/notepad/notepad_5.png")', width: 465, height: 460 }}
        />

        <div className="relative  flex items-center px-13 pt-5 text-gray-700 w-full h-[400px] ">
          <div className="gap-3 flex flex-col ">
            <h2 className="text-4xl " style={{ fontFamily: "SangSangShinb7" }}>
              제목 : {name}
            </h2>
            <p
              className="leading-tight break-words text-2xl w-full min-h-[140px] "
              style={{ fontFamily: "SangSangShinb7" }}
            >
              {description}
            </p>
            <p className="text-2xl text-end pr-2 w-[350px] " style={{ fontFamily: "SangSangShinb7" }}>
              {formatDate(updatedDate)}
            </p>
          </div>
        </div>
      </div>

      {/* 파형 섹션 */}
      <div className="w-1/2 flex-center  ">
        <WaveformWithAudio audioUrl={`${API_CONFIG.PRIVATE_AUDIO_LOAD_API}/${audioFileId}`} audioTitle={name} />
      </div>
    </div>
  );
}
