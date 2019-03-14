import video from './video.vue'
import Vue from 'vue'
const cmp = Vue.extend({
    render: h => h(video)
});

let lastWrap = null;
let lastComp = null;

export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$showVideo', {
            get() {
                return ((target, url, type) => {
                    if (lastComp) {
                        lastComp.$destroy();
                        lastComp.$el.remove();
                        lastWrap.remove();
                    }
                    const videoEl = document.createElement('div');
                    target.appendChild(videoEl);
                    const c = new cmp();
                    c.$mount(videoEl);
                    c.$children[0].play(type, url);

                    lastWrap = videoEl;
                    lastComp = c;
                });
            }
        })
    }
};