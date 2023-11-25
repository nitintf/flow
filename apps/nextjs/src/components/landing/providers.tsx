import { Button } from "@flow/ui/components/button"
import Link from "next/link"

interface Props {
  showActions?: boolean
}

export const Providers = ({ showActions = false }: Props) => {
  return (
    <section className="relative w-full">
      <div className="px-m py-xl mx-xs rounded-lg">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-h3 font-[700] pb-xxs text-gray-100">Tailor Your Storage Experience with Cloud Freedom</h2>
          <p className="text-link text-gray-400 mb-xs">Connect Anywhere, Store Everywhere: Your Recordings, Your Cloud. Seamless Integration with Any Cloud Storage Provider for Unmatched Flexibility.</p>
          <Button>Request Demo</Button>
          <Button variant={'link'} className="ml-xxs text-white" asChild>
            <Link href={"/signin"}>Try For Free</Link>
          </Button>
        </div>
        <div>
          <div className="text-center max-w-6xl mx-auto mt-m">
            <ul className="providers-mask flex items-center justify-center flex-wrap">
                <li className="provider-item-bg p-3 m-4 border-transparent border rounded-2 relative">
                    <svg aria-label="AWS" width={'40'} height={'40'} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#ffffff"> <path d="M4.51 7.687c0 .197.02.357.058.475.042.117.096.245.17.384a.233.233 0 01.037.123c0 .053-.032.107-.1.16l-.336.224a.255.255 0 01-.138.048c-.054 0-.107-.026-.16-.074a1.652 1.652 0 01-.192-.251 4.137 4.137 0 01-.164-.315c-.416.491-.937.737-1.565.737-.447 0-.804-.129-1.064-.385-.261-.256-.394-.598-.394-1.025 0-.454.16-.822.484-1.1.325-.278.756-.416 1.304-.416.18 0 .367.016.564.042.197.027.4.07.612.118v-.39c0-.406-.085-.689-.25-.854-.17-.166-.458-.246-.868-.246-.186 0-.377.022-.574.07a4.23 4.23 0 00-.575.181 1.525 1.525 0 01-.186.07.326.326 0 01-.085.016c-.075 0-.112-.054-.112-.166v-.262c0-.085.01-.15.037-.186a.399.399 0 01.15-.113c.185-.096.409-.176.67-.24.26-.07.537-.101.83-.101.633 0 1.096.144 1.394.432.293.288.442.726.442 1.314v1.73h.01zm-2.161.811c.175 0 .356-.032.548-.096.192-.064.362-.182.505-.342a.848.848 0 00.181-.341c.032-.129.054-.283.054-.465V7.03a4.43 4.43 0 00-.49-.09 3.996 3.996 0 00-.5-.033c-.357 0-.617.07-.793.214-.176.144-.26.347-.26.614 0 .25.063.437.196.566.128.133.314.197.559.197zm4.273.577c-.096 0-.16-.016-.202-.054-.043-.032-.08-.106-.112-.208l-1.25-4.127a.938.938 0 01-.048-.214c0-.085.042-.133.127-.133h.522c.1 0 .17.016.207.053.043.032.075.107.107.208l.894 3.535.83-3.535c.026-.106.058-.176.101-.208a.365.365 0 01.213-.053h.426c.1 0 .17.016.212.053.043.032.08.107.102.208l.84 3.578.92-3.578a.459.459 0 01.107-.208.347.347 0 01.208-.053h.495c.085 0 .133.043.133.133 0 .027-.006.054-.01.086a.768.768 0 01-.038.133l-1.283 4.127c-.031.107-.069.177-.111.209a.34.34 0 01-.203.053h-.457c-.101 0-.17-.016-.213-.053-.043-.038-.08-.107-.101-.214L8.213 5.37l-.82 3.439c-.026.107-.058.176-.1.213-.043.038-.118.054-.213.054h-.458zm6.838.144a3.51 3.51 0 01-.82-.096c-.266-.064-.473-.134-.612-.214-.085-.048-.143-.101-.165-.15a.38.38 0 01-.031-.149v-.272c0-.112.042-.166.122-.166a.3.3 0 01.096.016c.032.011.08.032.133.054.18.08.378.144.585.187.213.042.42.064.633.064.336 0 .596-.059.777-.176a.575.575 0 00.277-.508.52.52 0 00-.144-.373c-.095-.102-.276-.193-.537-.278l-.772-.24c-.388-.123-.676-.305-.851-.545a1.275 1.275 0 01-.266-.774c0-.224.048-.422.143-.593.096-.17.224-.32.384-.438.16-.122.34-.213.553-.277.213-.064.436-.091.67-.091.118 0 .24.005.357.021.122.016.234.038.346.06.106.026.208.052.303.085.096.032.17.064.224.096a.461.461 0 01.16.133.289.289 0 01.047.176v.251c0 .112-.042.171-.122.171a.552.552 0 01-.202-.064 2.428 2.428 0 00-1.022-.208c-.303 0-.543.048-.708.15-.165.1-.25.256-.25.475 0 .149.053.277.16.379.106.101.303.202.585.293l.756.24c.383.123.66.294.825.513.165.219.244.47.244.748 0 .23-.047.437-.138.619a1.435 1.435 0 01-.388.47c-.165.133-.362.23-.591.299-.24.075-.49.112-.761.112z"></path> <path fillRule="evenodd" d="M14.465 11.813c-1.75 1.297-4.294 1.986-6.481 1.986-3.065 0-5.827-1.137-7.913-3.027-.165-.15-.016-.353.18-.235 2.257 1.313 5.04 2.109 7.92 2.109 1.941 0 4.075-.406 6.039-1.239.293-.133.543.192.255.406z" clipRule="evenodd"></path> <path fillRule="evenodd" d="M15.194 10.98c-.223-.287-1.479-.138-2.048-.069-.17.022-.197-.128-.043-.24 1-.705 2.645-.502 2.836-.267.192.24-.053 1.89-.99 2.68-.143.123-.281.06-.217-.1.212-.53.686-1.72.462-2.003z" clipRule="evenodd"></path> </g> </g></svg>
                </li>
                <li className="provider-item-bg p-3 m-4 border-transparent border rounded-2 relative">
                    <svg viewBox="0 0 24 24" width={'40'} height={'40'} aria-label="Apple" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.52 12.46C16.508 11.8438 16.6682 11.2365 16.9827 10.7065C17.2972 10.1765 17.7534 9.74476 18.3 9.46C17.9558 8.98143 17.5063 8.5883 16.9862 8.31089C16.466 8.03349 15.8892 7.87923 15.3 7.86C14.03 7.76 12.65 8.6 12.14 8.6C11.63 8.6 10.37 7.9 9.40999 7.9C7.40999 7.9 5.29999 9.49 5.29999 12.66C5.30963 13.6481 5.48194 14.6279 5.80999 15.56C6.24999 16.84 7.89999 20.05 9.61999 20C10.52 20 11.16 19.36 12.33 19.36C13.5 19.36 14.05 20 15.06 20C16.79 20 18.29 17.05 18.72 15.74C18.0689 15.4737 17.5119 15.0195 17.1201 14.4353C16.7282 13.8511 16.5193 13.1634 16.52 12.46ZM14.52 6.59C14.8307 6.23965 15.065 5.82839 15.2079 5.38245C15.3508 4.93651 15.3992 4.46569 15.35 4C14.4163 4.10239 13.5539 4.54785 12.93 5.25C12.6074 5.58991 12.3583 5.99266 12.1983 6.43312C12.0383 6.87358 11.9708 7.34229 12 7.81C12.4842 7.82361 12.9646 7.71974 13.3999 7.50728C13.8353 7.29482 14.2127 6.98009 14.5 6.59H14.52Z" fill="#ffffff"></path> </g></svg>
                </li>
                <li className="provider-item-bg p-3 m-4 border-transparent border rounded-2 relative">
                    <svg width="40" aria-label="Google Drive" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M8.57437 2C7.86303 2 7.20523 2.37782 6.84681 2.99226L0.450743 13.9569C0.0657947 14.6169 0.0904195 15.4384 0.5142 16.0741L3.87108 21.1094C4.24201 21.6658 4.86647 22 5.53518 22H18.4648C19.1335 22 19.758 21.6658 20.1289 21.1094L23.4858 16.0741C23.9096 15.4384 23.9342 14.6169 23.5492 13.9569L17.1532 2.99226C16.7948 2.37782 16.137 2 15.4256 2H8.57437ZM9.80424 4H15.4256L21.259 14H16.0542L9.80424 4ZM13.6957 14L11.9088 11.1409L10.241 14H13.6957ZM9.07436 16L6.74103 20H18.4648L21.1315 16H9.07436ZM10.7112 9.22473L4.94342 19.1124L2.1783 14.9647L8.02952 4.93403L10.7112 9.22473Z" fill="#ffffff"></path> </g></svg>
                </li>
                <li className="provider-item-bg p-3 m-4 border-transparent border rounded-2 relative">
                    <svg aria-label="Microdoft OneDrive" fill="#ffffff" width="40" height="40" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>microsoftonedrive</title> <path d="M28.668 21.418c0.286-0.553 0.454-1.207 0.454-1.9 0-0.001 0-0.002 0-0.003v0c0-0.017 0-0.036 0-0.056 0-0.617-0.135-1.202-0.377-1.728l0.011 0.026c-0.243-0.527-0.576-0.973-0.984-1.336l-0.004-0.004c-0.411-0.361-0.895-0.65-1.426-0.84l-0.031-0.010c-0.516-0.19-1.112-0.3-1.733-0.3-0.008 0-0.017 0-0.025 0h0.001c-0.372 0-0.733 0.046-1.078 0.131l0.031-0.006c-0.406 0.098-0.745 0.206-1.075 0.334l0.057-0.019q-0.497 0.19-0.981 0.417-0.482 0.226-0.951 0.431zM24.904 23.733c0.005 0 0.010 0 0.016 0 0.477 0 0.934-0.081 1.36-0.229l-0.029 0.009c0.459-0.16 0.857-0.378 1.21-0.652l-0.010 0.007-9.035-5.403-12.873 5.418c0.406 0.257 0.875 0.471 1.372 0.62l0.040 0.010c0.461 0.139 0.991 0.219 1.539 0.219 0.002 0 0.005 0 0.007 0h-0zM4.021 21.492l12.389-5.228-4.789-2.87c-0.442-0.271-0.952-0.5-1.491-0.662l-0.046-0.012c-0.493-0.149-1.060-0.235-1.646-0.235-0.003 0-0.007 0-0.010 0h0.001c-0.009-0-0.019-0-0.029-0-0.769 0-1.499 0.168-2.155 0.468l0.032-0.013c-0.686 0.308-1.27 0.72-1.764 1.221l-0.001 0.001c-0.493 0.504-0.895 1.099-1.179 1.757l-0.014 0.038c-0.278 0.629-0.44 1.363-0.44 2.135 0 0.006 0 0.013 0 0.019v-0.001c0.003 0.637 0.11 1.248 0.304 1.819l-0.012-0.040c0.199 0.615 0.489 1.148 0.858 1.615l-0.008-0.011zM16.235 8.268c-0.008-0-0.017-0-0.026-0-1.132 0-2.206 0.251-3.169 0.699l0.046-0.019c-1.014 0.467-1.866 1.129-2.54 1.944l-0.010 0.012c0.413 0.108 0.766 0.236 1.104 0.391l-0.042-0.017c0.392 0.176 0.716 0.35 1.028 0.542l-0.039-0.022 5.973 3.574 3.413-1.437c0.174-0.079 0.4-0.166 0.631-0.241l0.050-0.014c0.192-0.064 0.436-0.128 0.684-0.177l0.041-0.007c-0.255-0.813-0.619-1.521-1.082-2.151l0.014 0.020c-0.467-0.636-1.012-1.18-1.627-1.632l-0.021-0.015c-0.595-0.438-1.281-0.801-2.018-1.054l-0.054-0.016c-0.695-0.241-1.496-0.38-2.329-0.38-0.010 0-0.019 0-0.029 0h0.002zM25.314 13.438c0.821 0.046 1.583 0.257 2.266 0.6l-0.033-0.015c0.699 0.349 1.296 0.795 1.799 1.329l0.003 0.003c0.499 0.533 0.906 1.159 1.192 1.849l0.015 0.041c0.278 0.662 0.44 1.43 0.44 2.237 0 0.011-0 0.023-0 0.034v-0.002c0 0.011 0 0.025 0 0.039 0 0.842-0.178 1.642-0.498 2.364l0.015-0.037c-0.64 1.461-1.782 2.604-3.203 3.228l-0.040 0.016c-0.686 0.306-1.486 0.484-2.327 0.484-0.014 0-0.027-0-0.041-0h-16.399c-0.014 0-0.031 0-0.048 0-1.036 0-2.021-0.218-2.912-0.612l0.046 0.018c-1.799-0.786-3.205-2.192-3.972-3.941l-0.019-0.049c-0.374-0.857-0.592-1.856-0.592-2.906 0-0.847 0.142-1.661 0.403-2.419l-0.016 0.052c0.274-0.791 0.639-1.477 1.092-2.094l-0.015 0.022c0.47-0.639 1.016-1.186 1.634-1.641l0.021-0.015c0.895-0.67 1.981-1.135 3.163-1.305l0.038-0.004q0.52-0.075 1.076-0.102h0.015c0.441-0.669 0.939-1.249 1.501-1.759l0.008-0.007c0.548-0.499 1.162-0.941 1.825-1.307l0.049-0.025c0.612-0.341 1.321-0.627 2.067-0.821l0.064-0.014c0.686-0.182 1.474-0.286 2.286-0.286 0.007 0 0.014 0 0.021 0h-0.001c0.009-0 0.019-0 0.029-0 1.090 0 2.135 0.191 3.104 0.541l-0.064-0.020c1.025 0.364 1.912 0.855 2.701 1.466l-0.022-0.016c0.808 0.627 1.495 1.361 2.051 2.191l0.021 0.033c0.55 0.817 0.983 1.767 1.246 2.786l0.014 0.064z"></path> </g></svg>
                </li>
                <li className="provider-item-bg p-3 m-4 border-transparent border rounded-2 relative">
                    <svg width={'40'} height={'40'} aria-label="Mega" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" fillRule="evenodd" d="M16.547 96c0-43.884 35.57-79.453 79.453-79.453 43.884 0 79.453 35.57 79.453 79.453 0 43.884-35.569 79.453-79.453 79.453S16.547 139.884 16.547 96ZM96 28.547c-37.256 0-67.453 30.197-67.453 67.453S58.744 163.453 96 163.453 163.453 133.256 163.453 96 133.256 28.547 96 28.547Z" clipRule="evenodd"></path><path fill="#ffffff" d="M114.19 93.058a.25.25 0 0 0-.212.052l-15.551 15.552a3.473 3.473 0 0 1-2.446 1.002 3.473 3.473 0 0 1-2.445-1.002L77.984 93.11a.212.212 0 0 0-.208-.05c-.09.025-.166.1-.166.204v22.621c0 .96-.778 1.737-1.738 1.737h-7.35a1.736 1.736 0 0 1-1.738-1.737v-39.76a1.74 1.74 0 0 1 1.743-1.743h5.04c.96.01 1.832.398 2.46 1.03l19.345 19.346a.85.85 0 0 0 1.218 0l19.346-19.345a3.457 3.457 0 0 1 2.46-1.03h5.035a1.74 1.74 0 0 1 1.743 1.742l.009 39.755v.005c0 .96-.778 1.737-1.738 1.737h-7.354c-.96 0-1.738-.777-1.738-1.737v-22.62a.207.207 0 0 0-.163-.207Z"></path></g></svg>
                </li>
                <li className="provider-item-bg p-3 m-4 border-transparent border rounded-2 relative">
                    <svg aria-label="Dropbox" width={'40'} height={'40'} viewBox="0 -0.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>dropbox [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7479.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M254.012,7330.74707 L249.825,7334.24637 L248,7333.0687 L248,7334.38937 L254,7338 L260,7334.38937 L260,7333.0687 L258.187,7334.24637 L254.012,7330.74707 Z M264,7322.92318 L258.117,7319 L254,7322.50952 L259.932,7326.25089 L264,7322.92318 Z M254,7329.99226 L258.117,7333.50177 L264,7329.57859 L259.932,7326.25089 L254,7329.99226 Z M244,7329.57859 L249.883,7333.50177 L254,7329.99226 L248.068,7326.25089 L244,7329.57859 Z M254,7322.50952 L248.068,7326.25089 L244,7322.92318 L249.883,7319 L254,7322.50952 Z" id="dropbox-[#ffffff]"> </path> </g> </g> </g> </g></svg>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
