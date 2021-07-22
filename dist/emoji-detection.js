export function isEmojiSupported() {
    const onWindows7 = /\bWindows NT 6.1\b/.test(navigator.userAgent);
    const onWindows8 = /\bWindows NT 6.2\b/.test(navigator.userAgent);
    const onWindows81 = /\bWindows NT 6.3\b/.test(navigator.userAgent);
    const onFreeBSD = /\bFreeBSD\b/.test(navigator.userAgent);
    const onLinux = /\bLinux\b/.test(navigator.userAgent) && !/\bAndroid\b/.test(navigator.userAgent);
    return !(onWindows7 || onWindows8 || onWindows81 || onLinux || onFreeBSD);
}
