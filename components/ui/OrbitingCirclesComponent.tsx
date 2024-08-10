import OrbitingCircles from "@/components/ui/orbiting-circles";
import { FaGithub } from "react-icons/fa6";
import { RiPoliceBadgeFill } from "react-icons/ri";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  xl:mb-32">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-4xl md:text-6xl xl:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        "Auto en regla auto seguro"
      </span>

      {/* Inner Circles */}
      <OrbitingCircles className="size-[30px] border-none bg-none" duration={20} delay={20} radius={80}>
        <Icons.whatsapp />
      </OrbitingCircles>
      <OrbitingCircles className="size-[40px] border-none bg-none" duration={20} delay={10} radius={80}>
        <Icons.notion />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles className="size-[60px] border-none bg-none" radius={190} duration={20} reverse>
        <Icons.googleDrive />
      </OrbitingCircles>

      <OrbitingCircles className="size-[80px] border-none bg-none" radius={190} duration={20} delay={20} reverse>
        <Icons.gitHub />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  gitHub: () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M33.2898 34.8955C33.3049 35.5781 32.7619 36.1325 32.083 36.1325H14.7998L16.2517 33.7227H32.0303C32.6902 33.7227 33.271 34.2356 33.2898 34.8955Z"
        className="fill-slate-900 dark:fill-white"
      />
      <path
        d="M36.7293 13.2943L35.8544 12.2233C35.7903 12.1479 35.7262 12.0724 35.6583 12.0008C34.9267 11.2239 33.9123 10.7865 32.8375 10.7865H17.2437C16.0369 10.7865 14.8792 11.3597 14.1438 12.3213L8.76236 19.3847L6.93335 21.7832H8.2344L9.36575 22.5676L10.8252 20.6481L16.0596 13.7808C16.3386 13.415 16.7836 13.1963 17.2437 13.1963H32.8337C33.2825 13.1963 33.7011 13.3961 33.9877 13.7431L34.0292 13.7921L35.0172 15.0026L36.0882 16.3188L37.7249 14.5162L36.7293 13.2943Z"
        className="fill-slate-900 dark:fill-white"
      />
      <path
        d="M46.3005 26.4255V35.9854C46.3005 37.0074 45.9083 37.969 45.1956 38.7006L44.7996 39.1079C44.0718 39.8584 43.0536 40.2883 42.009 40.2883H40.5533C39.2635 40.2883 38.0605 39.6547 37.3365 38.5912L32.7734 31.9087C32.4981 31.5015 32.038 31.2601 31.544 31.2601H18.5787C18.0621 31.2601 17.5756 31.5354 17.3078 31.9766L16.2557 33.7227L14.8038 36.1324L13.4311 38.4065C12.7296 39.568 11.4512 40.2883 10.0936 40.2883H8.28721C7.24637 40.2883 6.26964 39.8847 5.53049 39.1494C4.79512 38.414 4.3916 37.4335 4.3916 36.3927V26.4481C4.3916 25.5996 4.67444 24.7624 5.18732 24.0873L6.93714 21.7869H8.23819L9.36954 22.5713L7.10307 25.5468C6.90697 25.8032 6.7976 26.1238 6.7976 26.4481V36.3927C6.7976 36.7886 6.95222 37.162 7.23506 37.4448C7.51412 37.7239 7.88747 37.8823 8.28721 37.8823H10.0936C10.6102 37.8823 11.1005 37.607 11.3645 37.162L13.1181 34.2544L15.2412 30.7359C15.9427 29.5744 17.2211 28.8503 18.5787 28.8503H31.5477C32.8375 28.8503 34.0405 29.4877 34.7646 30.5511L39.3277 37.2336C39.603 37.6409 40.063 37.8823 40.5571 37.8823H42.0127C42.4087 37.8823 42.8009 37.7163 43.0762 37.4335L43.4722 37.0262C43.7437 36.7471 43.8908 36.3776 43.8908 35.9891V26.4292C43.8908 26.0898 43.7701 25.7542 43.5551 25.4902L42.0165 23.6046L45.1466 23.631L45.4219 23.9704C45.9875 24.6606 46.2968 25.5355 46.2968 26.433L46.3005 26.4255Z"
        className="fill-slate-900 dark:fill-white"
      />
      <path
        d="M28.3686 24.834L26.8187 26.5386C26.5547 26.829 26.2341 27.0477 25.891 27.1835C25.8344 27.2061 25.7778 27.2249 25.7175 27.2438H16.4744C16.2292 27.2438 15.9879 27.1721 15.788 27.0326L9.36572 22.5751L8.23438 21.7907H4.20677C3.54305 21.7907 3 21.2514 3 20.5839C3 19.9164 3.53928 19.3809 4.20677 19.3809H8.61149C8.66052 19.3809 8.71331 19.3847 8.76234 19.3922C8.95467 19.4149 9.13945 19.4865 9.30161 19.5959L10.8289 20.6556L16.8553 24.834H28.3686Z"
        className="fill-slate-900 dark:fill-white"
      />
      <path
        d="M47.6883 20.5802C47.6883 20.9196 47.5488 21.225 47.3225 21.4437C47.1075 21.6549 46.8096 21.7832 46.4815 21.7832H42.4502L41.2283 22.6279L40.3458 23.2388L34.8927 27.0213C34.6891 27.1608 34.4515 27.2325 34.2064 27.2325H28.116L30.5257 24.8227H33.8293L39.701 20.7499L37.0913 17.5481L38.8034 15.8323L41.7223 19.4149C41.8355 19.3809 41.9524 19.3658 42.0693 19.3658H46.4778C47.1415 19.3658 47.6845 19.9051 47.6845 20.5688L47.6883 20.5802Z"
        className="fill-slate-900 dark:fill-white"
      />
      <path
        d="M41.1941 10.6922L39.3877 12.6834L37.7246 14.5162L36.0879 16.3188L34.2288 18.3703L31.0685 21.8549L28.3684 24.8303L26.8184 26.5349C26.5544 26.8253 26.2339 27.044 25.8907 27.1797C25.8341 27.2024 25.7776 27.2212 25.7172 27.2401C25.6795 27.2514 25.6418 27.2627 25.6041 27.274C25.1704 27.3872 24.7103 27.3758 24.2767 27.2401C23.9636 27.142 23.662 26.9799 23.3942 26.7498L21.1692 24.8341L17.0888 21.3194C16.4138 20.7386 16.3384 19.7242 16.9191 19.0491C17.4999 18.3741 18.5143 18.2987 19.1894 18.8794L24.9366 23.8272L34.0327 13.7997L35.6618 12.0046L38.8145 8.52757C39.4141 7.87138 40.4323 7.81859 41.0885 8.4182C41.7485 9.01405 41.7975 10.0323 41.2016 10.6922H41.1941Z"
        fill="#7ADB78"
      />
    </svg>
  ),
  notion: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <path
          fill="#25D366"
          d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065zm4.135 6.434l-4.598 4.598l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l5.234-5.235a1 1 0 1 0-1.414-1.414"
        />
      </g>
    </svg>
  ),
  openai: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <path
          fill="#25D366"
          d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065zm4.135 6.434l-4.598 4.598l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l5.234-5.235a1 1 0 1 0-1.414-1.414"
        />
      </g>
    </svg>
  ),
  googleDrive: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <path
          fill="#25D366"
          d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065zm4.135 6.434l-4.598 4.598l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l5.234-5.235a1 1 0 1 0-1.414-1.414"
        />
      </g>
    </svg>
  ),
  whatsapp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <path
          fill="#25D366"
          d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065zm4.135 6.434l-4.598 4.598l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l5.234-5.235a1 1 0 1 0-1.414-1.414"
        />
      </g>
    </svg>
  ),
};
