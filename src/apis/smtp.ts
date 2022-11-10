/* SmtpJS.com - v3.0.0 */
interface Attachment {
    name: string
    path: string
}

interface aT {
    Action?: string
    SecureToken: string | undefined
    To: string
    From: string
    Subject: string
    Body: string
	Attachments?: Attachment[]
    nocache?: number
}

declare const XDomainRequest: new () => XMLHttpRequest;

const Email = {
    send: function(a: aT) {
        return new Promise(function(n) {
            a.nocache = Math.floor(1e6 * Math.random() + 1)
            a.Action = "Send"
            const t = JSON.stringify(a)
            Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e: unknown) {
                n(e)
            })
        })
    },
    ajaxPost: function(
            e: string,
            n: Document | XMLHttpRequestBodyInit | null | undefined,
            t: ((arg0: string) => unknown
        )) {
        const a = Email.createCORSRequest("POST", e);
        if (a !== null)
            a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function() {
                const e = a.responseText
                null != t && t(e)
            }, a.send(n)
    },
    ajax: function(e: string, n: ((arg0: string) => unknown) | null) {
        const t = Email.createCORSRequest("GET", e)
        if (t !== null)
            t.onload = function() {
                const e = t.responseText
                null != n && n(e)
            }, t.send()
    },
    createCORSRequest: function(e: string, n: string) {
        let t: XMLHttpRequest | null = new XMLHttpRequest
        return 'withCredentials' in t
        ? t.open(e, n, !0)
        : "undefined" != typeof XDomainRequest
        ? (t = new XDomainRequest).open(e, n)
        : t = null, t
    }
};

export default Email