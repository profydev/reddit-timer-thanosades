import React from 'react';

export default function Logo() {
  return (
    <>
      <a href="/">
        {/* style on svg fixes the extra space on the anchor */}
        <svg width="150" style={{ display: 'block' }} height="36" viewBox="0 0 150 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="83.1185" cy="10.5623" rx="1.9508" ry="1.93779" fill="#FF4500" />
          <ellipse cx="104.939" cy="10.5623" rx="1.9508" ry="1.93779" fill="#FF4500" />
          <path fillRule="evenodd" clipRule="evenodd" d="M66.7029 7.39987C67.312 7.40156 67.8054 7.89165 67.8071 8.49672V22.5904C67.8054 23.1955 67.312 23.6856 66.7029 23.6873C66.1695 23.6873 65.7091 23.3036 65.6172 22.7915C64.8629 23.5411 63.9058 23.9251 62.7831 23.9251C59.8756 23.9251 57.52 21.311 57.52 18.0937C57.52 14.8764 59.8756 12.2622 62.7831 12.2622C63.9058 12.2622 64.8443 12.6279 65.599 13.3775V8.49672C65.6007 7.89178 66.0939 7.40174 66.7029 7.39987ZM55.2564 18.8249C56.2134 18.8249 56.7654 18.1121 56.7287 17.4173C56.7183 17.1533 56.6876 16.8905 56.6367 16.6312C56.0477 14.1087 53.9868 12.2438 51.539 12.2438C48.6315 12.2438 46.2759 14.858 46.2759 18.0753C46.2759 21.2926 48.6315 23.9067 51.539 23.9067C53.3612 23.9067 54.6677 23.2487 55.6063 22.2068C56.0663 21.695 55.9743 20.9089 55.4221 20.5249C54.9621 20.2141 54.3916 20.3238 53.9683 20.671L53.9354 20.6994C53.5223 21.0549 52.7575 21.713 51.539 21.713C50.0671 21.713 48.8157 20.4516 48.5396 18.7881H55.2564V18.8249ZM51.5208 14.4559C52.8456 14.4559 53.9868 15.4795 54.4101 16.8871H48.6315C49.0548 15.4615 50.1957 14.4559 51.5208 14.4559ZM45.4664 12.3171C45.9816 12.4084 46.3864 12.8473 46.3864 13.3955C46.3864 13.9622 45.9446 14.4375 45.3926 14.4743H45.1717C43.0371 14.2365 41.4914 15.9184 41.4914 17.9656V22.5904C41.4914 23.2303 40.9576 23.7237 40.3134 23.6873C39.7244 23.6508 39.283 23.139 39.283 22.554V13.5966C39.2848 12.9916 39.7782 12.5018 40.3872 12.5001C40.9391 12.5001 41.4914 12.9202 41.4914 13.5966V13.7431C42.3561 12.6643 43.8651 12.0796 45.4664 12.3171ZM84.2223 14.5656C84.2206 13.9607 83.7275 13.4707 83.1185 13.4688C82.5093 13.4705 82.0159 13.9606 82.0143 14.5656V22.5904C82.0159 23.1955 82.5093 23.6856 83.1185 23.6873C83.7275 23.6854 84.2206 23.1954 84.2223 22.5904V14.5656ZM62.8016 21.7495C61.1084 21.7495 59.7466 20.1228 59.7466 18.0937C59.7466 16.083 61.1084 14.4375 62.8016 14.4375C64.4948 14.4375 65.8566 16.0646 65.8566 18.0937C65.8566 20.1228 64.4763 21.7495 62.8016 21.7495ZM78.2231 7.39987C78.8322 7.40156 79.3256 7.89165 79.3273 8.49672V22.5904C79.3256 23.1955 78.8322 23.6856 78.2231 23.6873C77.6894 23.6873 77.2294 23.3036 77.1374 22.7915C76.3828 23.5411 75.4261 23.9251 74.3033 23.9251C71.3958 23.9251 69.0403 21.311 69.0403 18.0937C69.0403 14.8764 71.3958 12.2622 74.3033 12.2622C75.4261 12.2622 76.3646 12.6279 77.1189 13.3775V8.49672C77.1206 7.89165 77.614 7.40156 78.2231 7.39987ZM74.3033 21.7495C72.6101 21.7495 71.2487 20.1228 71.2487 18.0937C71.2487 16.083 72.6101 14.4375 74.3033 14.4375C75.9965 14.4375 77.3583 16.0646 77.3583 18.0937C77.3583 20.1228 75.9965 21.7495 74.3033 21.7495ZM89.8167 14.4559V22.6088C89.8167 23.2119 89.3386 23.6873 88.6944 23.7237C88.0854 23.7221 87.592 23.2322 87.5902 22.6272V14.4743H86.6516C86.0997 14.4743 85.6394 13.999 85.6764 13.4323C85.7131 12.9022 86.1731 12.5181 86.6883 12.5181H87.6087V10.9279C87.6087 10.288 88.1421 9.7946 88.7863 9.83106C89.3753 9.86752 89.8167 10.3793 89.8167 10.9644V12.5001H90.829C91.3813 12.5001 91.8413 12.9751 91.8043 13.5417C91.7675 14.0719 91.3075 14.4559 90.7923 14.4559H89.8167Z" fill="#1E2537" />
          <path fillRule="evenodd" clipRule="evenodd" d="M100.896 22.5326V14.3797H101.871C102.387 14.3797 102.847 13.9957 102.883 13.4655C102.92 12.8989 102.46 12.4239 101.908 12.4239H100.896V10.8882C100.896 10.3031 100.454 9.79133 99.8654 9.75487C99.2212 9.71841 98.6878 10.2118 98.6878 10.8517V12.442H97.7674C97.2522 12.442 96.7922 12.826 96.7555 13.3562C96.7185 13.9228 97.1788 14.3981 97.7307 14.3981H98.6693V22.5511C98.6711 23.156 99.1645 23.6459 99.7735 23.6476C100.418 23.6111 100.896 23.1358 100.896 22.5326ZM135.007 17.4173C135.043 18.1121 134.491 18.8249 133.534 18.8249V18.7881H126.817C127.094 20.4516 128.345 21.713 129.817 21.713C131.035 21.713 131.8 21.0549 132.213 20.6994L132.246 20.671C132.67 20.3238 133.24 20.2141 133.7 20.5249C134.252 20.9089 134.344 21.695 133.884 22.2067C132.946 23.2487 131.639 23.9067 129.817 23.9067C126.909 23.9067 124.554 21.2925 124.554 18.0753C124.554 14.858 126.909 12.2438 129.817 12.2438C132.265 12.2438 134.326 14.1087 134.915 16.6312C134.966 16.8905 134.996 17.1533 135.007 17.4173ZM132.688 16.8871C132.265 15.4795 131.124 14.4559 129.799 14.4559C128.474 14.4559 127.333 15.4614 126.909 16.8871H132.688ZM143.524 13.376C143.524 12.8278 143.119 12.3889 142.604 12.2976C141.003 12.0601 139.494 12.6448 138.629 13.7236V13.577C138.629 12.9007 138.077 12.4805 137.525 12.4805C136.916 12.4822 136.422 12.9721 136.421 13.577V22.5344C136.421 23.1195 136.862 23.6313 137.451 23.6677C138.095 23.7042 138.629 23.2108 138.629 22.5709V17.946C138.629 15.8988 140.175 14.217 142.309 14.4548H142.53C143.082 14.418 143.524 13.9427 143.524 13.376ZM104.937 13.3626C105.546 13.3645 106.039 13.8545 106.04 14.4594V22.4842C106.039 23.0892 105.546 23.5792 104.937 23.5811C104.327 23.5794 103.834 23.0893 103.832 22.4842V14.4594C103.834 13.8544 104.327 13.3643 104.937 13.3626ZM116.959 12.7622C117.51 12.4161 118.199 12.2451 119.02 12.2451C119.462 12.2451 119.914 12.3192 120.373 12.4667C120.842 12.617 121.27 12.8639 121.657 13.2056C122.046 13.5489 122.364 13.9929 122.613 14.5356C122.863 15.0826 122.987 15.7459 122.987 16.5246V22.4221C122.987 22.774 122.885 23.0641 122.677 23.2789C122.469 23.495 122.19 23.603 121.858 23.603C121.526 23.603 121.248 23.495 121.039 23.2789C120.831 23.0641 120.73 22.774 120.73 22.4221V16.4647C120.73 15.7615 120.548 15.2198 120.189 14.8278C119.835 14.4412 119.338 14.247 118.678 14.247C118.019 14.247 117.526 14.4408 117.179 14.8263C116.826 15.2184 116.647 15.7608 116.647 16.4647V22.4221C116.647 22.774 116.546 23.0641 116.338 23.2789C116.129 23.495 115.851 23.603 115.519 23.603C115.187 23.603 114.908 23.495 114.699 23.2789C114.492 23.0641 114.39 22.774 114.39 22.4221V16.4647C114.39 15.7615 114.208 15.2198 113.85 14.8278C113.496 14.4412 112.998 14.247 112.339 14.247C111.68 14.247 111.186 14.4408 110.839 14.8263C110.486 15.2184 110.308 15.7608 110.308 16.4647V22.4221C110.308 22.774 110.206 23.0641 109.998 23.2789C109.79 23.495 109.511 23.603 109.179 23.603C108.847 23.603 108.569 23.495 108.36 23.2789C108.152 23.0641 108.051 22.774 108.051 22.4221V13.426C108.051 13.074 108.152 12.784 108.36 12.5692C108.569 12.3531 108.847 12.2451 109.179 12.2451C109.511 12.2451 109.79 12.3531 109.998 12.5692C110.147 12.7226 110.241 12.9144 110.283 13.1398L110.291 13.2002L110.423 13.0677C110.512 12.9861 110.61 12.9087 110.718 12.8355L110.886 12.7287C111.119 12.5916 111.388 12.4774 111.695 12.3853C112.008 12.2913 112.377 12.2451 112.802 12.2451C113.364 12.2451 113.921 12.3844 114.471 12.6609C114.908 12.8808 115.303 13.2339 115.656 13.7172L115.755 13.8595L115.905 13.6766C116.159 13.3821 116.435 13.128 116.732 12.9146L116.959 12.7622Z" fill="#1E2537" />
          <path fillRule="evenodd" clipRule="evenodd" d="M31.0838 15.4184C31.0838 18.9154 29.8836 22.1341 27.9234 24.7171L34.6842 31.4329C35.6843 32.4263 35.6843 34.0158 34.6842 35.0093C34.2041 35.5259 33.5241 35.7643 32.884 35.7643C32.2439 35.7643 31.5638 35.4862 31.0838 35.0093L24.2829 28.2538L24.2029 28.1743C21.7226 29.8433 18.7223 30.8368 15.5219 30.8368C6.96084 30.8368 0 23.9224 0 15.4184C0 6.91444 6.96084 0 15.5219 0C24.0829 0 31.0838 6.91444 31.0838 15.4184ZM15.5155 29.8228C23.5508 29.8228 30.0646 23.3688 30.0646 15.4074C30.0646 7.44592 23.5508 0.991902 15.5155 0.991902C7.48029 0.991902 0.96644 7.44592 0.96644 15.4074C0.96644 23.3688 7.48029 29.8228 15.5155 29.8228Z" fill="#1E2537" />
          <path fillRule="evenodd" clipRule="evenodd" d="M23.3738 9.88546C24.3333 9.88546 25.1111 9.11282 25.1111 8.15972C25.09 7.22167 24.3184 6.47218 23.3738 6.47218C22.4292 6.47218 21.6576 7.22167 21.6365 8.15972C21.6365 9.11282 22.4143 9.88546 23.3738 9.88546ZM21.5755 7.80549L17.1686 6.77533L17.1687 6.77523L21.5755 7.80549ZM17.1686 6.77533L15.457 11.9637L17.1682 6.77523L17.1686 6.77533ZM18.9143 21.4791C18.0439 22.3428 16.6422 22.5093 15.4653 22.5093C14.2897 22.5093 12.8867 22.3428 12.0176 21.4791H18.9143ZM5.56734 17.4939C4.76627 17.1446 4.24903 16.3577 4.24933 15.4887C4.24877 14.5686 4.82769 13.7463 5.698 13.4312C6.56831 13.1161 7.54411 13.3753 8.1398 14.08L5.56734 17.4939ZM25.2064 13.423C24.3225 13.116 23.3398 13.3973 22.756 14.1246L25.2762 17.5302C26.124 17.203 26.6825 16.3922 26.6826 15.4887C26.6823 14.5585 26.0903 13.7301 25.2064 13.423Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M5.00173 18.4999C5.00173 22.3065 9.67421 25.4033 15.4178 25.4033C21.1615 25.4033 25.8344 22.3065 25.8352 18.4999C25.8352 18.2542 25.8157 18.012 25.7778 17.7728C26.6096 17.3105 27.1232 16.436 27.1189 15.4892C27.1172 14.042 25.9366 12.8693 24.4798 12.8677C23.8167 12.8663 23.1776 13.1143 22.6911 13.5619C20.9494 12.4352 18.6164 11.7081 16.0331 11.6082L17.4582 7.28734L21.2011 8.16275C21.2037 9.35322 22.1754 10.3172 23.3738 10.3184C24.5732 10.317 25.5451 9.35154 25.5466 8.16016C25.5454 6.96861 24.5734 6.0029 23.3738 6.00146C22.5029 6.00252 21.7165 6.51903 21.3744 7.31459L17.2723 6.35526L17.2631 6.3531L16.8791 6.26314L15.1191 11.5987C12.4383 11.6488 10.0082 12.3737 8.20163 13.5255C7.72223 13.1034 7.10263 12.8672 6.45255 12.8672C4.99589 12.8691 3.81558 14.0418 3.8139 15.4887C3.81395 16.3983 4.28832 17.243 5.06748 17.7209C5.02393 17.9766 5.00173 18.2369 5.00173 18.4999ZM5.87257 18.4999C5.87257 18.2248 5.90176 17.9506 5.95965 17.6816C5.9615 17.6785 5.96291 17.6752 5.96436 17.6719L5.96618 17.6677C5.9894 17.6154 6.00184 17.5589 6.00276 17.5017C6.30537 16.3555 7.12048 15.317 8.29306 14.4853C8.36023 14.4597 8.42014 14.4183 8.46767 14.3646C10.2098 13.1934 12.6812 12.4611 15.4178 12.4611C18.1823 12.4611 20.6751 13.2081 22.4198 14.3996C22.469 14.4594 22.5336 14.5048 22.6066 14.5311C23.7544 15.3624 24.549 16.394 24.8403 17.5302C24.8403 17.5953 24.855 17.6596 24.8834 17.7183C24.9361 17.9744 24.9631 18.2352 24.9631 18.4999C24.9631 21.8294 20.6812 24.5383 15.4178 24.5383C10.1545 24.5383 5.87257 21.8298 5.87257 18.4999ZM23.4187 14.0835C24.4284 14.8858 25.1695 15.8412 25.5483 16.8896C25.9907 16.5583 26.2497 16.0391 26.2472 15.4887C26.2462 14.5191 25.4551 13.7332 24.4789 13.7323C24.0965 13.7317 23.7243 13.855 23.4187 14.0835ZM4.68474 15.4887C4.6857 14.5192 5.47654 13.7335 6.45255 13.7323C6.81402 13.7322 7.16684 13.8421 7.46359 14.0471C6.44993 14.8417 5.70145 15.7893 5.31001 16.8295C4.91987 16.5008 4.68474 16.0134 4.68474 15.4887ZM23.3734 6.86607C22.6558 6.86607 22.0715 7.4465 22.0715 8.15972C22.0715 8.87294 22.6558 9.45295 23.3734 9.45295C24.091 9.45295 24.6753 8.87294 24.6753 8.15972C24.6753 7.4465 24.0914 6.86607 23.3734 6.86607ZM11.7094 21.7844C12.4927 22.563 13.7214 22.9414 15.4653 22.9414C17.2091 22.9414 18.4375 22.563 19.2217 21.7844C19.3316 21.6753 19.3746 21.5161 19.3344 21.3669C19.2943 21.2177 19.177 21.1011 19.0268 21.0611C18.8767 21.0211 18.7164 21.0637 18.6064 21.1729C17.9938 21.7805 16.9662 22.0764 15.4653 22.0764C13.964 22.0764 12.9372 21.7805 12.3255 21.1729C12.1555 21.0038 11.8797 21.0038 11.7096 21.1726C11.5394 21.3415 11.5393 21.6154 11.7094 21.7844Z" fill="#1E2537" />
          <path fillRule="evenodd" clipRule="evenodd" d="M10.33 17.2426C10.33 16.362 11.0741 15.6228 11.9606 15.6228C12.8471 15.6228 13.5664 16.362 13.5664 17.2426C13.5664 18.1232 12.8476 18.8377 11.9606 18.8377C11.0737 18.8377 10.33 18.1232 10.33 17.2426ZM17.3637 17.2426C17.3637 16.3611 18.1087 15.6228 18.9961 15.6228C19.8831 15.6228 20.6019 16.3611 20.6019 17.2426C20.6019 18.1236 19.8835 18.8377 18.9961 18.8377C18.1087 18.8377 17.3637 18.1236 17.3637 17.2426Z" fill="#FF4500" />
        </svg>
      </a>
    </>
  );
}
