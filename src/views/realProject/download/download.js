import { base64ToBlob, urlToBase64 } from '@/utils/convert'

export const download = (url, name) => {
  urlToBase64(url).then((res) => {
    const base64Buf = base64ToBlob(res)
    const blob = new Blob([base64Buf])
    const a = document.createElement('a')
    a.style.display = 'none'
    a.href = window.URL.createObjectURL(blob)
    a.download = name||'图片.jpg'
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(a.href)
    document.body.removeChild(a)
  })
}
