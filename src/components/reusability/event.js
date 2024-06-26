// Extract the logic of adding and removing a DOM event listener into its own composable:
import { onMounted, onUnmounted } from "vue";

export function useEventListener(target, event, callback) {
  // if you want, you can also make this
  // support selector strings as target
  onMounted(() => target.addEventListener(event, callback));
  onUnmounted(() => target.removeEventListener(event, callback));
}
