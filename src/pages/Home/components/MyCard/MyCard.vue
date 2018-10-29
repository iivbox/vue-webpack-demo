<template>
    <div>
        <Card>
            <p slot="title">{{title}}</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
    </div>
</template>
<script>
import {Card} from 'iview';
export default {
    name: 'home',
    components: {
        Card
    },
    data(){
        return{
            title:'卡片组件'
        }
    }
}
</script>