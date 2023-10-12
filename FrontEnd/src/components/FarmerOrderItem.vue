<template>
    <tr>
        <td>
            {{ item.ProductName }}
        </td>
        <td>${{ item.ProductPrice }}</td>
        <td>
            {{ item.Quantity }}
        </td>
        <td>${{ getItemTotal(item).toFixed(2) }}</td>
    </tr>
</template>

<script>
// import axios from 'axios'
export default {
    name: 'FarmerOrderItem',
    props: {
        initialItem: Object
    },
    data() {
        return {
            item: this.initialItem
        }
    },
    methods: {
        getItemTotal(item) {
            return item.Quantity * item.ProductPrice
        }
    }
}
</script>