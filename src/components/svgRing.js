import * as React from 'react'

function SvgRing(props) {
  return (
    <svg width={629} height={629} viewBox="0 0 629 629" {...props} className="svg-bg-ring">
      <g fill="none" fillRule="evenodd">
        <path
          className="ring-row spin-counter"
          fill="#D8C7AB"
          d="M263.57 359.451l-15.55 13.578c9.735 11.138 22.17 19.855 36.303 25.094l7.177-19.365c-10.876-4.029-20.438-10.737-27.93-19.307zm-5.89-7.79a67.796 67.796 0 01-3.927-6.878l-18.497 9.184a92.22 92.22 0 005.102 8.939l17.322-11.245zm9.549-86.622l-14.46-14.736a78.982 78.982 0 00-3.004 3.099l15.153 14.018a77.668 77.668 0 012.31-2.381zm33.86 116.497a69.12 69.12 0 01-7.63-2.101l-6.594 19.57a88.074 88.074 0 009.919 2.72l4.305-20.189zm86.613-14.58l-16.672-12.17a69.069 69.069 0 01-10.141 11.089l13.631 15.505a90.056 90.056 0 0013.182-14.423zm-25.544-103.32c7.817 7.23 13.956 16.24 17.753 26.408l19.343-7.247c-4.946-13.2-12.919-24.921-23.087-34.319l-14.01 15.158zm18.448 28.362a68.771 68.771 0 013.672 22.183c0 1.5-.062 2.97-.155 4.443l20.602 1.318c.12-1.901.205-3.815.205-5.76a89.26 89.26 0 00-4.781-28.843l-19.543 6.66zm-133.962 24.868c-.031-.895-.067-1.781-.067-2.685 0-1.567.076-3.12.178-4.67l-20.598-1.393a88.158 88.158 0 00-.227 6.063c0 1.171.045 2.324.085 3.486l20.629-.801zm-3.748 49.73l16.738-12.09-.801-1.123-16.975 11.753c.343.494.69.98 1.038 1.46zm17.945-94.346l-16.378-12.562c-8.868 11.52-14.994 25.254-17.393 40.252l20.389 3.286c1.847-11.54 6.557-22.103 13.382-30.976zm84.676 103.877a74.74 74.74 0 01-2.778 1.273l8.182 18.956a85.921 85.921 0 003.624-1.652l-9.028-18.577zm-30.085 6.914c-4.207 0-8.316-.4-12.313-1.122l-3.69 20.313a89.8 89.8 0 0016.003 1.456c4.697 0 9.318-.37 13.823-1.064l-3.183-20.407a68.808 68.808 0 01-10.64.824zm-62.573-40.12a68.41 68.41 0 01-5.676-19.752l-20.474 2.69a88.768 88.768 0 007.39 25.677l18.76-8.614zm126.558-3.325l19.192 7.617a88.59 88.59 0 005.23-19.08l-20.398-3.21a68.136 68.136 0 01-4.024 14.673zM268.73 263.614a69.625 69.625 0 015.458-4.559l-12.372-16.533a87.59 87.59 0 00-7.096 5.925l14.01 15.167zm7.14-5.76a68.496 68.496 0 016.945-4.314l-9.785-18.186a87.682 87.682 0 00-9.023 5.605l11.864 16.894zm12.648-7.057l-8.075-19.008c10.746-4.572 22.57-7.101 34.99-7.101 2.03 0 4.038.089 6.037.227l-1.394 20.603a61.786 61.786 0 00-4.643-.183 68.648 68.648 0 00-26.915 5.462z"
        />
        <path
          className="spin ring-row"
          fill="#9AB9AC"
          fillOpacity={0.68}
          d="M316.658 429.194v-19.718c24.984-.434 47.624-10.542 64.38-26.72l13.963 13.934c-20.346 19.748-47.923 32.065-78.343 32.504m-3.39 0c-30.42-.439-57.998-12.756-78.344-32.504l13.963-13.933c16.756 16.187 39.396 26.285 64.38 26.72v19.717m84.128-34.888l-13.963-13.933c16.207-16.766 26.28-39.426 26.73-64.41h19.697c-.448 30.42-12.716 58.012-32.464 78.343m-164.865 0c-19.748-20.331-32.065-47.923-32.464-78.343h19.698c.449 24.984 10.522 47.644 26.73 64.415l-13.964 13.928m197.33-81.704h-19.7c-.448-24.994-10.522-47.65-26.729-64.42l13.963-13.928c19.698 20.336 32.016 47.933 32.464 78.348m-210.095 0h-19.698c.399-30.415 12.716-58.012 32.464-78.348l13.963 13.928c-16.207 16.77-26.28 39.426-26.73 64.42m161.275-66.794c-16.756-16.192-39.396-26.285-64.38-26.724v-19.718c30.42.444 57.997 12.756 78.343 32.509l-13.963 13.933m-132.151-.005l-13.963-13.928c20.346-19.753 47.923-32.065 78.343-32.51v19.719c-24.984.439-47.624 10.532-64.38 26.72"
        />
        <path
          className="spin-counter ring-row"
          fill="#DBEDCF"
          fillOpacity={0.68}
          d="M314.977 491.78c-31.372 0-60.84-8.15-86.443-22.437l18.84-32.602 3.666-.99 6.791-11.732c17.079 8.922 36.516 13.975 57.146 13.975 20.602 0 40.039-5.053 57.145-13.975l6.763 11.733 3.695.989 18.811 32.599c-25.575 14.29-55.042 22.44-86.414 22.44m91.074-25.125l-18.84-32.608.995-3.675-6.792-11.733c33.02-21.065 55.356-57.355 57.146-98.977h13.554l2.7-2.691h37.623c-.937 63.607-35.35 119.107-86.386 149.684m-182.149 0c-51.064-30.577-85.448-86.077-86.414-149.684h37.623l2.7 2.691h13.583c1.762 41.622 24.097 77.912 57.117 98.977l-6.792 11.733.995 3.675-18.812 32.608m268.535-155.063h-37.623l-2.7-2.686H438.56c-1.79-41.621-24.126-77.917-57.146-98.982l6.792-11.74-.995-3.668 18.84-32.605c51.036 30.58 85.449 86.073 86.386 149.68m-317.326 0h-37.623c.966-63.607 35.35-119.104 86.414-149.68l18.812 32.605-.995 3.669 6.792 11.739c-33.02 21.065-55.355 57.36-57.117 98.982H177.81l-2.7 2.686m197.011-107.05c-17.106-8.92-36.543-13.973-57.145-13.973-20.63 0-40.067 5.053-57.146 13.972l-6.791-11.73-3.666-.986-18.84-32.608c25.603-14.279 55.071-22.437 86.443-22.437s60.84 8.158 86.414 22.437l-18.811 32.608-3.695.986-6.763 11.73M227.365 477.123l-2.345 4.435 1.582.839 2.344-4.438c-.536-.282-1.045-.553-1.581-.836m11.58 5.728l-2.034 4.576 1.61.723 2.062-4.587a64.694 64.694 0 01-1.638-.712m-5.847-2.773l-2.203 4.516 1.61.785 2.203-4.505c-.537-.26-1.073-.53-1.61-.796m-11.354-6.123l-2.514 4.36 1.554.893 2.514-4.347c-.537-.3-1.045-.604-1.554-.906m-26.295-18.633l-3.248 3.878 1.356 1.152 3.248-3.878c-.452-.378-.904-.77-1.356-1.152m49.427 30.068l-1.893 4.652 1.667.672 1.864-4.643c-.565-.226-1.102-.455-1.638-.68m-28.64-14.792l-2.682 4.276 1.525.944 2.683-4.27c-.509-.317-1.017-.63-1.525-.95m-15.789-11.184l-3.106 3.982 1.384 1.099 3.135-3.985c-.48-.365-.96-.726-1.413-1.096m5.14 3.909l-2.993 4.084 1.469 1.056 2.965-4.09c-.48-.344-.96-.7-1.44-1.05m5.253 3.733l-2.824 4.186 1.497.997 2.796-4.183c-.48-.33-.989-.666-1.469-1m52.308 24.722l-1.384 4.83 1.694.488 1.384-4.818c-.565-.158-1.13-.33-1.694-.5m31.604 6.279l-.536 5.019 1.779.189.537-5.019c-.594-.06-1.187-.127-1.78-.19m-6.411-.81l-.706 4.99 1.78.247.705-4.991c-.593-.08-1.186-.167-1.78-.246m12.824 1.401l-.34 5.036 1.78.127.339-5.05c-.593-.037-1.186-.07-1.78-.113m6.468.356l-.197 5.061 1.807.06.17-5.053c-.593-.02-1.215-.046-1.78-.068m-50.669-9.134l-1.553 4.765 1.723.556 1.525-4.773c-.565-.175-1.13-.365-1.695-.548m-66.373-38.796l-3.36 3.754 1.299 1.195 3.389-3.765c-.424-.399-.876-.785-1.328-1.184m91.397 45.148l-.875 4.948 1.75.308.876-4.957c-.593-.101-1.186-.195-1.75-.3m-31.126-8.478l-1.694 4.708 1.666.61 1.723-4.71c-.565-.204-1.13-.405-1.695-.608m24.77 7.214l-1.045 4.92 1.751.372 1.045-4.914c-.565-.119-1.158-.254-1.75-.378m-6.27-1.472l-1.215 4.87 1.723.431 1.214-4.88c-.565-.138-1.158-.277-1.723-.42M132.748 345.501l-4.97.881.31 1.763 4.943-.876a37.717 37.717 0 01-.283-1.768m4.237 18.887l-4.83 1.386.48 1.712 4.83-1.381a37.94 37.94 0 01-.48-1.717m-1.638-6.24l-4.887 1.215.424 1.729 4.886-1.212-.423-1.731m3.474 12.421l-4.774 1.55.565 1.701 4.773-1.55c-.197-.568-.367-1.133-.564-1.7m2.09 6.114l-4.717 1.717.593 1.678 4.717-1.715-.593-1.68m-10.422-50.401l-5.056.353.141 1.782 5.028-.353c-.029-.59-.057-1.189-.113-1.782m12.681 56.44l-4.632 1.878.678 1.655 4.66-1.881c-.254-.554-.48-1.105-.706-1.653m-9.264-30.876l-4.914 1.048.395 1.749 4.915-1.051c-.142-.58-.255-1.158-.396-1.746m-2.909-19.13l-5.027.53.197 1.776 5.028-.534a38.137 38.137 0 00-.198-1.771m183.98 166.443c-.31 0-.593-.011-.904-.014v5.061h1.78v-5.061c-.283.003-.594.014-.876.014M131.76 339.125l-5 .706.255 1.768 4.999-.704c-.085-.587-.17-1.177-.254-1.77m33.101 83.101l-4.067 2.971 1.045 1.444 4.096-2.972c-.368-.48-.707-.963-1.074-1.443m3.87 5.169l-3.983 3.115 1.102 1.404 3.982-3.113c-.367-.466-.734-.935-1.101-1.406m17.172 19.245l-3.502 3.64 1.27 1.246 3.531-3.64c-.452-.413-.875-.83-1.3-1.246m-13.132-14.207l-3.87 3.246 1.158 1.37 3.87-3.254c-.396-.458-.763-.91-1.158-1.362m-27.086-43.76l-4.576 2.042.706 1.632 4.576-2.036c-.226-.545-.452-1.096-.706-1.638m35.672 53.389l-3.644 3.513 1.243 1.288 3.643-3.525c-.395-.429-.819-.847-1.242-1.276m-4.378-4.75l-3.757 3.391 1.215 1.328 3.728-3.381c-.395-.44-.762-.893-1.186-1.339m-25.674-37.016l-4.462 2.364.847 1.576 4.434-2.358a40.093 40.093 0 01-.819-1.582m-2.937-5.759l-4.49 2.2.762 1.604 4.547-2.205c-.282-.531-.537-1.06-.819-1.599m9.349 16.96l-4.293 2.675.96 1.514 4.265-2.67-.932-1.519m3.474 5.432l-4.18 2.821.988 1.48 4.208-2.821-1.016-1.48m-6.807-10.97l-4.35 2.516.904 1.542 4.35-2.516c-.283-.514-.593-1.023-.904-1.542m216.884 84.468l1.525 4.768 1.723-.557-1.554-4.764c-.565.186-1.13.37-1.694.553m109.5-94.286l4.52 2.203.79-1.607-4.519-2.194c-.254.533-.536 1.062-.79 1.598m5.31-11.763l4.66 1.88.677-1.654-4.66-1.879-.678 1.653m-2.542 5.934l4.576 2.039.734-1.633-4.604-2.044c-.226.542-.451 1.093-.706 1.638m-5.733 11.566l4.434 2.36.847-1.578-4.434-2.364a805.04 805.04 0 01-.847 1.582m-13.783 21.795l4.095 2.969 1.045-1.44-4.095-2.972c-.339.48-.706.963-1.045 1.443m-3.926 5.132l3.982 3.115 1.102-1.409-3.982-3.112c-.368.468-.735.94-1.102 1.406m-4.095 4.994l3.897 3.25 1.13-1.367-3.87-3.248c-.366.455-.762.907-1.157 1.365m32.424-55.432l4.716 1.715.622-1.678-4.717-1.714c-.198.556-.424 1.118-.621 1.677m-36.66 60.29l3.756 3.377 1.186-1.33-3.757-3.39c-.395.447-.79.9-1.186 1.343m22.878-31.153l4.377 2.519.876-1.548-4.35-2.516c-.282.52-.593 1.03-.903 1.545m-6.892 10.905l4.18 2.824.989-1.483-4.18-2.821c-.311.494-.65.988-.989 1.48m22.793-46.137l4.773 1.551.565-1.7-4.773-1.55c-.198.57-.368 1.135-.565 1.7m-170.027 126.8l.197 5.052 1.78-.059-.17-5.061c-.621.022-1.186.048-1.807.068m179.178-177.45l5.055.18.057-1.784-5.056-.178c-.028.596-.056 1.189-.056 1.782m.141-8.236v1.788h5.056v-1.788h-5.056m-1.102 21.11l5.028.528.198-1.777-5.028-.528c-.056.593-.141 1.18-.198 1.776m-6.27 31.614l4.83 1.386.508-1.72-4.83-1.384c-.169.577-.338 1.147-.508 1.718m1.723-6.228l4.858 1.217.424-1.734-4.886-1.214c-.142.576-.255 1.155-.396 1.73m1.44-6.28l4.943 1.045.367-1.749-4.914-1.042c-.113.582-.254 1.16-.395 1.746m1.27-6.33l4.972.876.31-1.763-4.97-.881c-.114.593-.198 1.183-.311 1.768m1.045-6.372l4.999.7.226-1.767-5-.706a37.565 37.565 0 01-.225 1.773m1.384-12.83l5.055.352.113-1.782-5.055-.353c-.029.593-.057 1.192-.113 1.782M383.41 486.074l1.864 4.643 1.667-.672-1.893-4.652c-.536.226-1.101.455-1.638.68M130.178 319.84l-5.056.178.057 1.785 5.084-.181-.085-1.782m228.661 174.074l1.215 4.872 1.723-.432-1.215-4.863c-.565.144-1.158.282-1.723.423m18.528-5.56l1.723 4.707 1.666-.607-1.694-4.71c-.565.208-1.13.406-1.695.61m-12.286 3.934l1.384 4.81 1.723-.49-1.384-4.82c-.593.166-1.158.333-1.723.5m-31.69 5.959l.537 5.019 1.78-.19-.537-5.018c-.593.062-1.186.13-1.78.189m-6.41.514l.338 5.05 1.78-.127-.34-5.033c-.592.045-1.186.073-1.779.11m25.56-3.423l1.046 4.911 1.751-.372-1.045-4.92c-.593.127-1.186.262-1.751.38m-12.738 2.156l.706 4.99 1.78-.245-.707-4.99c-.593.084-1.186.166-1.779.245m6.383-.972l.876 4.957 1.75-.308-.875-4.945c-.565.104-1.158.195-1.75.296m76.737-32.144l2.966 4.087 1.44-1.05-2.965-4.088c-.48.35-.96.707-1.44 1.051m5.168-3.864l3.107 3.986 1.412-1.102-3.107-3.977c-.48.365-.96.729-1.412 1.093m5.027-4.036l3.248 3.875 1.356-1.146-3.248-3.881c-.452.387-.904.774-1.356 1.152m4.886-4.214l3.39 3.762 1.327-1.194-3.39-3.757c-.423.399-.875.791-1.327 1.19m-48.635 31.302l2.033 4.59 1.638-.73-2.033-4.572c-.565.243-1.102.475-1.638.712m57.956-40.225l3.643 3.522 1.243-1.288-3.643-3.513c-.396.429-.82.853-1.243 1.28m-4.576 4.544l3.503 3.643 1.299-1.24-3.53-3.649c-.424.415-.848.836-1.272 1.246m-47.534 32.994l2.203 4.502 1.61-.785-2.203-4.514c-.537.26-1.073.537-1.61.797m22.397-12.82l2.825 4.183 1.469-.997-2.825-4.186c-.48.336-.988.67-1.469 1m-16.635 9.9l2.372 4.437 1.582-.836-2.372-4.435c-.509.283-1.045.557-1.582.833m11.213-6.408l2.655 4.276 1.525-.952-2.683-4.267c-.509.316-.989.63-1.497.943m-5.536 3.313l2.514 4.347 1.525-.887-2.514-4.367c-.508.303-1.017.608-1.525.907m64.622-61.848l4.293 2.672.932-1.517-4.265-2.675c-.31.509-.622 1.02-.96 1.52m-63.097-258.4l2.514-4.374-1.525-.896-2.542 4.37c.536.3 1.045.601 1.553.9m-11.354-6.12l2.203-4.533-1.61-.785-2.203 4.525c.537.257 1.073.528 1.61.793m16.862 9.476l2.683-4.287-1.525-.946-2.655 4.284c.48.31.988.63 1.497.95m-11.128-6.528l2.372-4.443-1.582-.844-2.372 4.46c.537.28 1.045.55 1.582.827m26.916 17.709l3.135-3.991-1.412-1.099-3.135 3.997c.48.364.96.728 1.412 1.093m4.999 4.095l3.248-3.889-1.356-1.147-3.276 3.881c.48.381.932.771 1.384 1.155m-15.393-11.732l2.825-4.194-1.47-1.003-2.824 4.197c.48.33.989.664 1.47 1m20.25 15.983l3.39-3.765-1.328-1.198-3.39 3.771c.424.401.876.79 1.328 1.192m4.688 4.431l3.53-3.654-1.298-1.243-3.503 3.649c.424.412.848.836 1.271 1.248m-53.041-36.208l2.061-4.59-1.638-.728-2.033 4.606c.536.237 1.073.469 1.61.712m33.384 19.525l2.965-4.101-1.44-1.048-2.994 4.098c.508.347.989.7 1.469 1.05m-82.783-33.917l.706-5.008-1.779-.248-.706 5.01c.593.08 1.186.164 1.78.246m-6.412-.808l.537-5.036-1.78-.192-.536 5.039c.621.056 1.186.124 1.779.189m-6.411-.596l.339-5.053-1.78-.127-.339 5.073c.593.034 1.187.068 1.78.107m19.205 2.43l.876-4.966-1.78-.31-.875 4.976c.593.099 1.186.195 1.78.3m24.995 6.351l1.554-4.784-1.695-.551-1.553 4.782c.564.183 1.13.37 1.694.553m12.088 4.477l1.893-4.672-1.667-.67-1.864 4.661c.537.226 1.102.455 1.638.68m-5.987-2.35l1.694-4.724-1.666-.61-1.723 4.725c.565.203 1.13.4 1.695.61m-12.258-4.042l1.384-4.84-1.723-.495-1.384 4.84c.565.162 1.13.326 1.723.495m-6.242-1.703l1.215-4.883-1.723-.43-1.215 4.892c.565.141 1.158.277 1.723.421m-6.27-1.469l1.045-4.934-1.751-.37-1.045 4.926c.593.121 1.158.257 1.751.378m121.25 88.988l4.35-2.517-.876-1.55-4.377 2.522c.31.517.593 1.028.903 1.545m19.037 47.808l4.886-1.217-.424-1.737-4.886 1.22c.17.573.282 1.158.424 1.734m-5.564-18.536l4.745-1.718-.622-1.68-4.716 1.714.593 1.684m2.09 6.114l4.773-1.553-.565-1.703-4.773 1.55c.197.574.367 1.136.565 1.706m4.914 18.72l4.914-1.047-.367-1.749-4.942 1.048c.14.582.254 1.161.395 1.748m-3.05-12.543l4.83-1.38-.509-1.718-4.83 1.387c.17.57.34 1.138.509 1.711m6.468 38.107l5.055-.353-.113-1.782-5.055.35c.056.593.084 1.189.113 1.785m-2.232-19.22l4.971-.878-.31-1.76-4.971.873c.113.587.197 1.178.31 1.765m2.542 25.665l5.056-.178-.057-1.785-5.055.178c0 .593.028 1.186.056 1.785m-1.581-19.288l4.999-.703-.226-1.768-5.028.703.255 1.768m.762 6.412l5.028-.531-.198-1.777-5.028.526c.057.595.142 1.186.198 1.782m-45.98-104.595l3.756-3.395-1.186-1.33-3.757 3.394c.396.435.791.887 1.186 1.33m15.789 20.39l4.18-2.825-.989-1.485-4.18 2.83c.31.491.65.983.989 1.48m-7.541-10.467l3.982-3.124-1.102-1.41-3.982 3.122c.367.466.734.94 1.102 1.412m3.869 5.166l4.095-2.972-1.045-1.449-4.123 2.98c.367.477.706.963 1.073 1.44m-16.494-19.83l3.643-3.519-1.243-1.29-3.643 3.527c.395.43.819.853 1.243 1.283m8.586 9.628l3.87-3.257-1.13-1.37-3.898 3.26c.395.46.762.91 1.158 1.367m15.082 20.931l4.265-2.677-.932-1.517-4.293 2.678c.31.5.62 1.01.96 1.516m9.32 16.955l4.52-2.2-.792-1.607-4.519 2.208c.255.537.537 1.065.791 1.599M130.093 314.29v-.904h-5.055v1.788h5.055v-.884m356.662-68.449l4.66-1.884-.678-1.652-4.66 1.881.678 1.655M322.32 129.573l.17-5.075-1.78-.065-.17 5.075c.594.017 1.187.045 1.78.065m156.33 98.698l4.433-2.37-.847-1.579-4.434 2.367.847 1.582m5.592 11.622l4.604-2.048-.734-1.635-4.576 2.045c.255.542.48 1.09.706 1.638m-328.954-18.827l-4.35-2.525-.904 1.55 4.378 2.517c.283-.514.593-1.028.876-1.542m3.36-5.513l-4.264-2.678-.96 1.517 4.293 2.677c.31-.505.621-1.016.932-1.516m-6.525 11.136l-4.434-2.367-.847 1.58 4.462 2.369c.283-.526.537-1.057.82-1.582m-2.938 5.742l-4.547-2.214-.763 1.607 4.52 2.206c.253-.54.508-1.068.79-1.599m16.749-27.532l-4.096-2.98-1.045 1.45 4.096 2.973c.338-.48.677-.966 1.045-1.443m7.993-10.122l-3.87-3.265-1.158 1.37 3.87 3.259c.395-.46.79-.91 1.158-1.364m-11.722 15.384l-4.208-2.83-.988 1.485 4.18 2.825c.339-.492.677-.989 1.016-1.48m15.986-20.24l-3.784-3.394-1.187 1.33 3.785 3.4c.396-.446.79-.9 1.186-1.336m-8.36 9.84l-3.982-3.12-1.102 1.409 3.983 3.124c.367-.472.734-.946 1.101-1.412m-23.414 38.493l-4.604-2.045-.734 1.635 4.604 2.048c.254-.542.48-1.096.734-1.638m-7.033 18.034l-4.773-1.551-.565 1.7 4.802 1.556c.17-.57.367-1.132.536-1.705m-6.354 25.004l-4.943-.873-.31 1.76 4.97.878c.085-.585.17-1.178.283-1.765m-1.017 6.374l-5-.703-.253 1.768 4.999.703.254-1.768m-.82 6.398l-5.027-.526-.197 1.777 5.027.53c.085-.595.141-1.186.198-1.781m-.593 6.428l-5.028-.35-.14 1.782 5.055.353c.056-.596.084-1.192.113-1.785m-.34 6.445l-5.083-.178-.057 1.785 5.056.178.085-1.785m52.364-121.708l-3.672-3.53-1.243 1.29 3.644 3.52c.423-.43.847-.85 1.27-1.28m-41.122 64.966l-4.717-1.714-.593 1.678 4.717 1.723.593-1.687m2.372-6.01l-4.688-1.887-.65 1.658 4.66 1.884.678-1.655m-8.106 24.496l-4.886-1.22-.424 1.737 4.887 1.22c.14-.58.282-1.164.423-1.737M314.977 129.42c.282 0 .593.008.875.008v-5.078h-1.779v5.078c.31 0 .593-.008.904-.008M137.465 262.46l-4.83-1.393-.48 1.723 4.83 1.381c.17-.573.31-1.14.48-1.711m-3.163 12.506l-4.915-1.048-.395 1.746 4.914 1.05c.141-.584.283-1.166.396-1.748m130.57-138.668l-1.412-4.841-1.694.494 1.384 4.841c.564-.164 1.13-.333 1.722-.494m6.242-1.63l-1.214-4.892-1.751.43 1.214 4.883c.593-.144 1.158-.28 1.751-.42m-18.556 5.558l-1.723-4.728-1.666.61 1.723 4.725c.565-.21 1.101-.407 1.666-.607m6.129-2.068l-1.553-4.787-1.695.55 1.553 4.785c.565-.184 1.13-.37 1.695-.548m18.726-4.917l-1.074-4.926-1.723.37 1.045 4.934c.565-.121 1.158-.257 1.752-.378m12.71-2.158l-.707-5.01-1.75.251.677 5.005c.593-.082 1.186-.167 1.78-.246m12.85-1.265l-.367-5.07-1.78.124.368 5.053c.593-.04 1.186-.073 1.78-.107m6.439-.31l-.17-5.073-1.807.062.197 5.075c.594-.02 1.187-.048 1.78-.065m-25.674 2.548l-.875-4.971-1.751.308.875 4.962c.565-.104 1.158-.2 1.751-.3m-37.197 10.45l-1.892-4.662-1.667.67 1.893 4.67c.565-.225 1.101-.454 1.666-.677m49.992-12.173l-.537-5.036-1.78.19.537 5.035c.593-.065 1.186-.133 1.78-.19m-78.772 26.694l-2.683-4.287-1.525.943 2.683 4.29a190.82 190.82 0 011.525-.946m-10.733 7.171l-2.994-4.098-1.44 1.048 2.994 4.1c.48-.347.96-.703 1.44-1.05m5.31-3.68l-2.824-4.197-1.497 1.003 2.824 4.194c.508-.336.989-.67 1.497-1m-10.478 7.547l-3.135-4-1.384 1.099 3.106 3.99c.452-.364.932-.728 1.413-1.09m-5.028 4.031l-3.276-3.88-1.356 1.146 3.248 3.89c.452-.385.932-.772 1.384-1.156m-4.886 4.217l-3.417-3.774-1.328 1.198 3.418 3.765c.423-.401.875-.791 1.327-1.19m-4.745 4.379l-3.53-3.655-1.271 1.243 3.502 3.654c.452-.412.875-.833 1.3-1.242m47.505-32.986l-2.203-4.525-1.61.785 2.231 4.533a51.572 51.572 0 011.582-.793m-5.762 2.914l-2.344-4.46-1.582.845 2.345 4.449c.536-.28 1.073-.551 1.581-.834m11.637-5.606l-2.062-4.606-1.61.728 2.034 4.593c.536-.246 1.101-.478 1.638-.715m-18.839 9.609l-2.514-4.378 1.554-.896 2.514 4.37c-.509.3-1.017.601-1.554.904"
        />
        <path
          className="spin-2x ring-row"
          fill="#8CC8C5"
          fillOpacity={0.68}
          d="M314.963 534.738c-57.418 0-111.492-21.815-152.77-61.512l15.769-16.4c35.581 34.191 83.876 55.255 137 55.255a197.28 197.28 0 0047.388-5.758l5.448 22.067c-17.089 4.186-34.797 6.348-52.835 6.348m158.96-67.703l-16.428-15.764c34.22-35.57 55.27-83.869 55.27-136.989 0-40.758-12.383-78.671-33.6-110.179l18.906-12.693c24.271 36.032 37.356 78.445 37.356 122.872 0 57.422-21.836 111.491-61.504 152.753m-342.069-29.877a217.114 217.114 0 01-28.729-61.574l21.795-6.32c5.779 19.855 14.57 38.426 25.84 55.2l-18.906 12.694m-36.86-108.02a222.15 222.15 0 01-.496-14.856c0-44.427 13.044-86.84 37.356-122.872l18.906 12.693c-21.217 31.508-33.6 69.421-33.6 110.18 0 4.474.165 8.915.454 13.32l-22.62 1.535m356.97-157.4c-35.582-34.203-83.877-55.255-137.001-55.255a197.47 197.47 0 00-47.387 5.746l-5.449-22.063c17.09-4.186 34.797-6.344 52.836-6.344 57.417 0 111.49 21.819 152.769 61.516l-15.768 16.4m-274.002 0l-15.768-16.4c16.676-16.028 35.416-29.13 55.6-39.065l10.031 20.465c-18.41 9.065-35.21 20.916-49.863 35"
        />
        <path
          className="spin-counter ring-row"
          fill="#D8C7AB"
          d="M204.545 545.703l4.085 1.889 10.868-23.248c-1.387-.624-2.775-1.225-4.085-1.857l-10.868 23.216M85.224 335.496c-.077-.747-.077-1.495-.155-2.258l-.077-1.118-25.668 2.236.386 4.501 25.59-2.235-.076-1.126m95.58 166.449l-14.723 21.073 3.7 2.59 14.723-21.043c-1.234-.848-2.467-1.742-3.7-2.62m65.672 59.406l4.317 1.171 6.629-24.735c-1.465-.378-2.93-.832-4.317-1.233l-6.629 24.797m43.936 8.17l4.471.393 2.313-25.637c-1.542-.115-3.084-.208-4.548-.354l-2.236 25.598m-65.287-15.084l4.317 1.557 8.71-24.104a572.067 572.067 0 00-4.24-1.541l-8.787 24.088m-60.2-64.918l-16.495 19.71 3.468 2.913 16.496-19.655c-1.157-.956-2.313-1.981-3.469-2.968m103.365 76.896l4.394.77 4.47-25.313c-1.464-.23-2.929-.508-4.47-.778l-4.394 25.32M97.402 391.057l-24.126 8.772 1.542 4.263 24.049-8.772c-.54-1.41-1.002-2.837-1.465-4.263m-5.935-19.231l-24.743 6.62 1.156 4.348 24.82-6.629c-.462-1.449-.847-2.875-1.233-4.34M312.69 544.957v25.73h4.548v-25.723c-.771 0-1.542.062-2.313.062-.694 0-1.464-.062-2.235-.07M87.92 355.438c-.077-.74-.23-1.464-.385-2.204l-.154-1.126-25.283 4.456.771 4.44 25.283-4.456-.232-1.11M150.203 475.8l-18.114 18.168 3.16 3.206 18.191-18.168c-1.08-1.063-2.158-2.12-3.237-3.206m-11.254-12.372l-.386-.454c-.616-.71-1.233-1.411-1.772-2.105l-19.656 16.48 2.852 3.469 19.733-16.542-.771-.848m-12.333-15.901l-.848-1.203-1.08-1.572-21.042 14.73 2.62 3.707 21.044-14.737-.694-.925m-20.35-34.702h.078l-1.002-2.066-.463-1.025-23.201 10.853 1.85 4.093 23.278-10.822-.54-1.033m9.482 17.782l-1.157-1.957-.54-.987-22.276 12.842 2.313 3.923 22.2-12.834-.54-.987m81.936 82.353l-12.872 22.23 3.931 2.259 12.872-22.238c-1.387-.755-2.697-1.488-3.93-2.25m325.511-99.088l23.201 10.83 1.927-4.1-23.278-10.838c-.617 1.364-1.233 2.744-1.85 4.108m-9.558 17.736l22.276 12.842 2.236-3.916-22.277-12.849c-.693 1.326-1.464 2.628-2.235 3.923m17.42-36.274l24.05 8.78 1.618-4.263-24.126-8.78c-.54 1.434-1.002 2.845-1.542 4.263m10.715-38.748l25.36 4.455.77-4.44-25.283-4.47c-.308 1.495-.54 2.96-.847 4.455m3.854-44.553c.077.74.077 1.48.077 2.22 0 .779 0 1.526-.077 2.297h25.745v-4.517h-25.745m-212.82 232.244l2.235 25.622 4.47-.386-2.235-25.59c-1.464.146-2.929.239-4.47.354m204.418-168.082l24.82 6.637 1.156-4.363-24.743-6.637c-.385 1.473-.77 2.906-1.233 4.363m7.4-39.55l25.59 2.25.386-4.508-25.668-2.251c-.077 1.503-.154 3.014-.308 4.509m-42.01 111.813l21.044 14.753 2.62-3.7-21.043-14.745a84.689 84.689 0 01-2.62 3.692m-130.113 89.33l6.63 24.742 4.393-1.164-6.706-24.812c-1.388.408-2.852.855-4.317 1.233m19.27-5.897l8.71 24.119 4.317-1.565-8.787-24.095c-1.387.524-2.852 1.033-4.24 1.541m-39.002 9.982l4.47 25.314 4.471-.787-4.47-25.305c-1.465.27-2.93.547-4.471.778m123.714-62.867l18.191 18.191 3.16-3.19-18.19-18.176a111.38 111.38 0 01-3.16 3.175m-14.954 13.49l16.495 19.678 3.468-2.913L465 489.55c-1.156.987-2.312 1.989-3.468 2.944m-51.105 31.85l10.868 23.286 4.086-1.911-10.869-23.232c-1.31.647-2.697 1.233-4.085 1.857m34.995-19.763l14.722 21.043 3.7-2.59-14.722-21.082a273.165 273.165 0 01-3.7 2.629m-17.035 10.645l12.795 22.253 3.931-2.266-12.872-22.246c-1.233.763-2.544 1.495-3.854 2.259m61.819-50.92l19.732 16.542 2.93-3.47-19.733-16.502c-.925 1.172-1.927 2.274-2.93 3.43m-43.781-339.664l1.85 1.303v-.008l.925.655 14.722-21.05-3.7-2.598-14.722 21.02.925.678M465 139.018l16.495-19.702-3.391-2.906-16.495 19.648c1.156.963 2.235 1.973 3.391 2.96m14.723 13.736l18.19-18.176-3.237-3.199-18.19 18.168a421.257 421.257 0 013.237 3.207m-50.334-38.85l2.004 1.126.925.555 12.795-22.23-3.854-2.258-12.872 22.23 1.002.578m-76.541-27.256l1.079.2c.77.132 1.464.27 2.235.401l1.156.2 4.394-25.313-4.394-.778-4.47 25.29M404.8 74.124l-4.24-1.558-8.786 24.073c1.464.509 2.852 1.017 4.239 1.557l8.787-24.072m111.15 126.751l22.2-12.834-2.236-3.923-22.276 12.849c.771 1.287 1.542 2.598 2.313 3.908m-22.74-33.19l19.656-16.488-2.929-3.461-19.655 16.533c.925 1.133 1.927 2.259 2.929 3.415m49.408 108.753l25.283-4.455-.77-4.455-25.36 4.455c.308 1.488.54 2.968.847 4.455m2.39 20.003l25.59-2.243-.385-4.525-25.59 2.258c.154 1.48.23 2.991.385 4.51m-6.552-39.712l24.743-6.622-1.156-4.37-24.82 6.644c.462 1.442.925 2.89 1.233 4.348m-33.145-72.942l20.966-14.714-2.543-3.716-21.043 14.746c.848 1.233 1.773 2.443 2.62 3.684m27.287 53.702l24.126-8.756-1.541-4.278-24.127 8.772c.54 1.418 1.08 2.852 1.542 4.262m-7.554-18.66l23.278-10.862-1.927-4.093-23.2 10.83c.616 1.35 1.232 2.752 1.85 4.124m-192.24-134.56l1.156.07v.023c.77.061 1.542.1 2.312.17l1.08.061 2.235-25.575-4.47-.386-2.313 25.637M105.342 217.756l1.002-2.05v-.008l.462-1.018-23.278-10.845-1.85 4.1 23.201 10.854.463-1.033m-21.12 97.638v-2.259l.077-1.14H58.554v4.524h25.745l-.077-1.125M312.766 83.558l1.079-.023v.008l1.156-.039 1.156.039 1.08.015V57.875h-4.471v25.683m-187.46 99.288h.077l1.233-1.842v-.008l.694-.933-21.043-14.73-2.621 3.708 21.043 14.73.617-.925m-10.715 17.02v.015l1.157-1.966.54-.987-22.2-12.826-2.313 3.916 22.277 12.826.54-.979m-15.725 33.338l-24.05-8.772-1.54 4.262 24.048 8.772c.54-1.426 1.002-2.844 1.542-4.262M85.069 295.29c.078-.755.078-1.51.155-2.274l.077-1.117-25.591-2.236-.386 4.517 25.668 2.228.077-1.118m2.467-19.987c.154-.74.308-1.48.385-2.227l.232-1.11-25.283-4.463-.77 4.455 25.282 4.463.154-1.118m4.24-19.67c.154-.74.385-1.473.616-2.198l.308-1.079-24.82-6.629-1.156 4.348 24.743 6.62.308-1.063m45.71-88.828l1.464-1.719.77-.847-19.732-16.519-2.852 3.461 19.656 16.48.693-.856M246.476 67.18l6.63 24.789 1.078-.316v.015c.771-.2 1.465-.424 2.159-.609v-.015l1.079-.3-6.63-24.728-4.316 1.164m47.25 17.343v.007c.772-.069 1.543-.108 2.313-.17v-.022l1.08-.077-2.236-25.614-4.47.393 2.235 25.552 1.079-.07m-68.525-10.428l8.71 24.08a240.781 240.781 0 014.317-1.534l-8.787-24.103-4.24 1.557m48.638 13.134v.023c.694-.13 1.465-.277 2.235-.4v-.016l1.08-.185-4.471-25.29-4.47.786 4.47 25.29 1.156-.208m-92.111 38.687v.023l1.85-1.326v-.007l.925-.648-14.723-21.035-3.7 2.613 14.723 21.043.925-.663M165.85 138.24v.016l1.696-1.488.848-.732-16.496-19.656-3.468 2.914 16.495 19.694.925-.748m-12.41 11.277l-18.191-18.168-3.16 3.207 18.114 18.168c1.079-1.08 2.158-2.15 3.237-3.207m51.105-66.675l10.868 23.21 1.002-.47v.015l2.081-.94 1.002-.471-10.791-23.263-4.162 1.92m-5.936 32.15v.023l2.004-1.133v-.016l1.002-.555-12.872-22.237-3.931 2.25 12.872 22.246.925-.578m-8.556 393.25l-8.093 12.703 1.927 1.226 8.093-12.696-1.927-1.233m-57.04-28.743l1.542 1.641 11.1-10.174-1.542-1.634-11.1 10.167m42.395 18.522l-1.773-1.41-9.172 11.94 1.772 1.402 9.173-11.932m31.989 20.403l-6.938 13.35 2.004 1.05 7.015-13.367-2.081-1.033m-47.482-33.26l-1.619-1.557-10.175 11.107 1.62 1.55 10.174-11.1m100.744 68.833c.771.162 1.465.347 2.236.509l3.237-14.715c-.694-.146-1.465-.331-2.158-.493l-3.315 14.7m21.12 3.792c.771.1 1.542.185 2.313.292l1.927-14.938a221.1 221.1 0 01-2.236-.277l-2.004 14.923m-37.23-23.757l-4.547 14.36c.693.224 1.387.486 2.158.702l4.47-14.353c-.693-.223-1.387-.485-2.08-.709m-18.962-6.968l-5.704 13.92c.693.294 1.387.533 2.08.826l5.782-13.913c-.694-.278-1.465-.548-2.158-.833M71.195 345.21c.077.747.154 1.51.308 2.258l14.877-1.958c-.077-.763-.231-1.503-.309-2.258l-14.876 1.958m3.546 21.15c.154.733.385 1.48.54 2.197l14.645-3.245c-.155-.747-.309-1.472-.463-2.197l-14.722 3.246m-5.242-63.962c-.077.763-.077 1.519-.077 2.282l15.03.655c0-.756 0-1.519.078-2.266l-15.03-.671m-.078 21.444c0 .77 0 1.526.077 2.258l15.03-.632c-.076-.755-.076-1.518-.076-2.266l-15.031.64m37.693 121.525l1.156 1.912 12.718-8.086-1.233-1.911-12.641 8.085m-10.638-18.615l1.002 2.02 13.335-6.945-1.002-2.027-13.335 6.952M71.503 281.054c-.154.763-.231 1.503-.308 2.243l14.876 1.981c.078-.778.232-1.503.309-2.25l-14.877-1.974M87.46 407.29c.308.702.54 1.411.77 2.097l13.952-5.75c-.308-.694-.54-1.41-.848-2.104L87.46 407.29m-7.323-20.164c.232.717.54 1.426.771 2.143l14.337-4.525c-.231-.732-.54-1.433-.694-2.158l-14.414 4.54m39.157 75.863l1.388 1.796 11.947-9.165-1.387-1.796-11.948 9.165m376.077 18.168l1.542-1.642-11.023-10.16-1.619 1.635 11.1 10.167m46.326-71.731c.308-.694.54-1.403.847-2.105l-13.951-5.765c-.309.701-.54 1.418-.848 2.096l13.952 5.774m-32.451 55.367l1.387-1.789-11.948-9.165-1.387 1.781 11.948 9.173m12.41-17.505l1.233-1.897-12.718-8.085-1.234 1.904 12.719 8.078m10.79-18.5l1.08-2.004-13.335-6.96-1.08 2.012 13.336 6.952M303.13 559.778c.77.031 1.541.031 2.312.054l.617-15.023c-.694-.038-1.465-.03-2.236-.07l-.693 15.04m257.372-233.632v-2.274l-14.953-.655c-.078.755-.078 1.526-.078 2.258l15.031.67m-5.78 42.449c.153-.74.307-1.465.462-2.205l-14.646-3.26c-.154.74-.385 1.464-.54 2.204l14.723 3.26m-5.627 20.697c.232-.724.463-1.426.694-2.143l-14.337-4.54c-.231.732-.462 1.434-.694 2.15l14.337 4.533m9.404-41.8c.077-.74.154-1.504.308-2.26l-14.953-1.95c-.077.74-.154 1.496-.309 2.244l14.954 1.965M363.793 539.807l3.238 14.699c.77-.162 1.464-.34 2.235-.509l-3.237-14.7c-.771.163-1.465.355-2.236.51m19.502-5.065l4.547 14.353c.694-.216 1.388-.47 2.159-.702l-4.548-14.36c-.77.224-1.465.486-2.158.71m-59.43 10.066l.694 15.023c.694-.023 1.465-.023 2.236-.054l-.617-15.038c-.77.038-1.542.03-2.313.07m20.119-1.666l1.927 14.938c.77-.107 1.464-.192 2.235-.292l-1.927-14.923c-.77.1-1.542.185-2.235.277m58.273-15.246l5.704 13.913 2.08-.825-5.703-13.913c-.694.3-1.388.555-2.081.825m35.688-18.415l8.093 12.688 1.927-1.218-8.093-12.703-1.927 1.233m16.572-11.454l9.173 11.932 1.773-1.395-9.173-11.932-1.773 1.395m-33.992 21.428l6.937 13.374 2.004-1.04-6.937-13.367-2.004 1.033m49.485-34.293l10.175 11.115 1.619-1.557-10.175-11.092-1.619 1.534M454.517 130.54l1.85 1.395 9.096-11.94-1.773-1.395-9.173 11.94m40.93 16.888l-11.1 10.16 1.542 1.634 11.1-10.152-1.542-1.642m26.208 33.846l-12.719 8.102 1.234 1.896 12.718-8.086-1.233-1.912m-12.41-17.49l-11.87 9.158 1.387 1.773 11.87-9.15-1.387-1.78m-39.235-20.388l1.696 1.534 10.175-11.084-1.696-1.55-10.175 11.1m-86.638-49.578c.693.208 1.387.478 2.08.709l4.549-14.36c-.694-.232-1.388-.501-2.159-.725l-4.47 14.376m56.5 26.492l8.093-12.695-1.85-1.21-8.093 12.664 1.85 1.241m-64.054-28.643l1.079.3 6.629-24.773-4.317-1.18-6.629 24.736 1.234.347 2.004.57m35.688 13.011l2.081.925 1.002.463 10.792-23.217-4.086-1.896-10.79 23.255 1.001.47m-9.25-4.031c.694.293 1.388.532 2.159.825l5.704-13.89c-.694-.3-1.388-.555-2.081-.84l-5.781 13.905m20.272 9.473l6.937-13.335-2.004-1.04-6.937 13.35 2.004 1.025M560.503 302.43l-15.03.663c0 .74 0 1.518.077 2.266l14.953-.648v-2.281m-18.807-83.263l-13.875 5.758c.231.686.54 1.403.77 2.105l13.952-5.766c-.308-.694-.54-1.41-.847-2.097M363.87 88.738c.694.162 1.465.34 2.159.524l3.237-14.707c-.694-.154-1.465-.347-2.158-.5l-3.238 14.683m168.653 111.05l-13.412 6.937 1.079 2.035 13.335-6.96-1.002-2.012m22.2 60.193L540 263.249c.154.724.385 1.457.54 2.181l14.645-3.237-.463-2.212m-5.627-20.704l-14.337 4.54c.232.717.463 1.418.694 2.127l14.337-4.51c-.154-.724-.462-1.433-.694-2.157m9.404 41.816l-14.954 1.965c.155.733.232 1.496.309 2.236l14.953-1.973c-.154-.733-.23-1.488-.308-2.228M75.28 259.942c-.154.748-.385 1.488-.54 2.22l14.723 3.26c.154-.74.308-1.48.463-2.204l-14.646-3.276m45.4-96.189l-1.387 1.788 11.948 9.157 1.387-1.788-11.947-9.157m54.727-33.23l-9.173-11.94-1.772 1.396 9.172 11.94 1.773-1.396m-67.06 50.727l-1.233 1.92 12.718 8.07 1.156-1.896-12.641-8.094m26.207-33.861l-1.541 1.626 11.1 10.175 1.54-1.619-11.099-10.182m25.36-4.024l-10.175-11.092-1.619 1.542 10.175 11.1 1.619-1.55m-79.008 95.896c-.231.717-.54 1.418-.77 2.135l14.413 4.525c.232-.71.463-1.41.694-2.127l-14.337-4.533m16.572-39.504l-1.002 2.02 13.335 6.937 1.002-2.012-13.335-6.945m-9.172 19.37l-.848 2.097 13.874 5.774c.309-.71.54-1.419.848-2.112l-13.874-5.758M306.06 83.743l-.617-15.046c-.77.03-1.541.023-2.312.07l.693 15.038c.771-.046 1.465-.039 2.236-.062m-20.041 1.65l-2.004-14.923c-.694.092-1.465.185-2.236.277l2.004 14.915c.771-.092 1.465-.185 2.236-.27m57.965 0c.77.085 1.541.186 2.235.286l2.004-14.93a98.584 98.584 0 01-2.235-.278l-2.004 14.923m-20.041-1.65c.77.023 1.541.016 2.235.062l.694-15.039c-.771-.046-1.542-.038-2.313-.069l-.616 15.046m-96.197 16.88l-5.781-13.897-2.081.833 5.78 13.897 2.082-.832m-35.766 18.445l-8.093-12.695-1.927 1.218 8.093 12.695 1.927-1.218m17.498-9.997l-6.938-13.35-2.08 1.032 6.937 13.35 2.08-1.032m51.26-34.517l3.237 14.684c.693-.162 1.464-.347 2.158-.509l-3.237-14.684c-.694.162-1.465.332-2.159.51M244.55 94.518l-4.547-14.36c.693-.247 1.387-.501 2.158-.717l4.47 14.368c-.693.216-1.387.47-2.08.71"
        />
        <path
          className="spin-counter ring-row"
          fill="#DBEDCF"
          fillOpacity={0.68}
          d="M314.983 590.657c-152.427 0-276.389-123.978-276.389-276.377 0-152.394 123.962-276.377 276.39-276.377 152.385 0 276.347 123.983 276.347 276.377 0 152.399-123.962 276.377-276.348 276.377m0-545.652C166.254 45.005 45.7 165.563 45.7 314.28c0 148.717 120.554 269.279 269.283 269.279 148.688 0 269.242-120.562 269.242-269.279 0-148.717-120.554-269.275-269.242-269.275"
        />
        <path
          className="spin ring-row"
          fill="#8CC8C5"
          fillOpacity={0.8}
          d="M314.963 627.775c-44.369 0-87.313-9.154-126.693-26.564l11.638-26.389c35.2 15.6 74.154 24.294 115.055 24.294 76.386 0 145.837-30.232 197.046-79.336l19.952 20.759c-58.668 56.306-135.434 87.236-216.998 87.236m-184.696-60.102c-12.968-9.53-25.367-20.099-36.958-31.718-24.702-24.664-44.7-52.734-59.712-83.118l25.89-12.702c20.521 41.428 50.781 77.189 87.787 104.252l-17.007 23.286m444.875-78.339l-23.942-16.06c30.64-45.433 48.596-100.163 48.596-158.992 0-40.83-8.645-79.668-24.18-114.817l26.365-11.667c17.34 39.329 26.46 82.206 26.46 126.484 0 63.309-18.621 123.743-53.3 175.052M10.606 389.88c-6.033-24.445-9.12-49.78-9.12-75.598 0-72.334 24.321-140.915 69.117-196.428l22.422 18.09C53.738 184.786 30.13 246.826 30.13 314.281a284.93 284.93 0 008.408 68.705l-27.932 6.893M545.12 146.697a286.304 286.304 0 00-62.04-62.178l17.006-23.291a312.839 312.839 0 0136.531 31.376 318.682 318.682 0 0131.78 37.091l-23.277 17.002M136.11 92.795L118.011 70.36c25.415-20.626 53.632-36.944 83.702-48.577l10.356 26.901c-27.647 10.76-53.252 25.728-75.959 44.112m294.24-38.891c-35.296-15.71-74.344-24.455-115.387-24.455a284.715 284.715 0 00-43.942 3.396L266.604 4.49A316.728 316.728 0 01314.963.785c44.51 0 87.597 9.21 127.073 26.726L430.35 53.904"
        />
      </g>
    </svg>
  )
}

export default SvgRing
