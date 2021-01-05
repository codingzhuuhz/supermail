import {debounce} from "@/common/utils";
export const mixin = {
    mounted(){
        const refresh = debounce(this.$refs.scroll.refresh,800) ;
        this.itemImgListener = () => {refresh()}
        this.$bus.$on("imgItemLoading",this.itemImgListener)
    }
}
