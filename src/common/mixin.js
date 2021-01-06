import {debounce} from "@/common/utils";
export const mixin = {
    data(){
      return {
          newRefresh:null
      }
    },
    mounted(){
        this.newRefresh  = debounce(this.$refs.scroll.scroll.refresh(),800) ;
        this.itemImgListener = () => {this.newRefresh()}
        this.$bus.$on("imgItemLoading",this.itemImgListener)
    }
}
