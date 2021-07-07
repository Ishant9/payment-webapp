document.getElementById("add_id").addEventListener("click",function(){
    // document.getElementById("table_btn_wrapper_id").style.filter="blur(0.5)";
    // body.style.filter="blur(0.5)";
    document.getElementById("model_add").style.display="block";
})
document.getElementById("edit_id").addEventListener("click",function(){
    document.getElementById("model_edit").style.display="block";
})
document.getElementById("delete_id").addEventListener("click",function(){
    document.getElementById("model_delete").style.display="block";
})
document.getElementById("cancel_id").addEventListener("click",function(){
    document.getElementById("model_edit").style.display="block";
})
function cancel_add(e){
    console.log(e)
    document.getElementById("model_add").style.display="none";
}
function cancel_edit(e){
    console.log(e)
    document.getElementById("model_edit").style.display="none";
}
function cancel_delete(e){
    console.log(e)
    document.getElementById("model_delete").style.display="none";
}

window.onload = function(){
    DummyServlet('http://localhost:8080/H2HBABBA1802/dummy')
    .then(res=>{
        return res.json();
    }).then(resData=>{
        console.log(resData);
    })
}
