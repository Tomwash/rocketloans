export interface CallBacks {
    cancel: (event: MessageEvent) => void;
    error: (event: MessageEvent) => void;
    events: (event: MessageEvent) => void;
    exit: (event: MessageEvent) => void;
    success: (event: MessageEvent) => void;
}

var messageHandler: EventListenerOrEventListenerObject;
var iframe: HTMLIFrameElement;

export function loadIFrame(link: string, callbacks: CallBacks) {

    if ((callbacks.cancel instanceof Function) !== true) throw new Error('Missing the cancel callbacks function');
    if ((callbacks.error instanceof Function) !== true) throw new Error('Missing the error callbacks function');
    if ((callbacks.events instanceof Function) !== true) throw new Error('Missing the events callbacks function');
    if ((callbacks.exit instanceof Function) !== true) throw new Error('Missing the exit callbacks function');
    if ((callbacks.success instanceof Function) !== true) throw new Error('Missing the success callbacks function');

    // Create IFrame
    createIFrame(link);

    // Set Message Listener on Window Object
    // Attach message listener
    messageHandler = function (event: any) {
        if (event instanceof MessageEvent) {
            switch (event.data.type) {
                case "ROCKETLOANS_CANCEL":
                    callbacks.cancel(event);
                    destroy();
                    break;
                case "ROCKETLOANS_ERROR":
                    callbacks.error(event);
                    break;
                case "ROCKETLOANS_EXIT":
                    callbacks.exit(event);
                    destroy();
                    break;
                case "ROCKETLOANS_EVENT":
                    callbacks.events(event);
                    break;
                case "ROCKETLOANS_SUCCESS":
                    callbacks.success(event);
                    destroy();
                    break;
            }
        }
    }
    window.addEventListener('message', messageHandler)
}
function createIFrame(link: string) {
    if (iframe) {
        destroy();
    }

    // create IFrame
    iframe = document.createElement('iframe');
    iframe.src = link;
    iframe.setAttribute("id", "rocketloans-iframe");
    iframe.onload = () => {
        window.parent.parent.scrollTo(0,0)
    }
    document.body.appendChild(iframe);
}
function destroy() {
    if (iframe) { iframe.remove(); }
    window.removeEventListener('message', messageHandler)
}
