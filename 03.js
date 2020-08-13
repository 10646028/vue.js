var loading = true;
var app = new Vue({
    el:'#app',
    data:{
        list:[
            { id:'1', nama:'選項1' },
            { id:'2', nama:'選項3' },
            { id:'3', nama:'選項3' },
        ],
        list2:[
            { id:'4', nama:'選項4' },
            { id:'5', nama:'選項5' },
            { id:'6', nama:'選項6' },
        ],
        list3:{
            '123456789': { nama:'選項4' },
            '666666666': { nama:'選項5' },
            '777777777': { nama:'選項6' },
        },
    },
    
});

