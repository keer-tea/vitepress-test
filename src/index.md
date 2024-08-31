# hello, world

<script setup lang="ts">

import { data as docs } from './index.data.js'


const fakeData = [
    {
        lastUpdateTime: 19
    },
    {
        lastUpdateTime: 100
    },
    {
        lastUpdateTime: 399
    },
]

const initialValue = Infinity;

// const lastUpdateTime = docs.reduce((accumulator, item) => {
const lastUpdateTime = fakeData.reduce((resTime, item) => {
    // If I can get the submission time information from 'item'
    // then I will select the latest submission time

    // But I don't know how to do that... (I tried)
    // ...

    return (item.lastUpdateTime < resTime) ? item : resTime
}, initialValue)

</script>

<span style="color: red">Last website update time</span>: {{lastUpdateTime}}

<div v-for="item in docs">
docItem: {{item}}
</div>