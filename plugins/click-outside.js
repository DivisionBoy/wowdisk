import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    mounted(el, binding, vnode) {
      el.clickOutsideEvent = function(event) {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event, el);
        }
      };
      document.body.addEventListener('mousedown', el.clickOutsideEvent);
    },
    unmounted(el) {
      document.body.removeEventListener('mousedown', el.clickOutsideEvent);
    }
});
})