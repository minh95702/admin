function saveData()
{
    let user = new Array(234);
    for(var i = 0; i<user_option.length; i++)
        user[i] = user_option[i]!=null?user_option[i]:"";
    localStorage.setItem("user_option", JSON.stringify(user));
}

function loadData()
{
    const result = confirm("Bạn có muốn tiếp tục lần làm trước?");
    if(!result)
    {
        user_option = new Array(234)
    }
    else
    {   
        user_option = JSON.parse(localStorage.getItem("user_option"));
        for(var i = 0; i<user_option.length; i++)
        {
            if(user_option[i]!="")
            {
                document.getElementById(user_option[i]).style.backgroundColor = "#F00";
                document.getElementById(correct_option[i]).style.backgroundColor = "#0F0";
                if(user_option[i]==correct_option[i])
                {
                    number[i].style.backgroundColor="#0F0";
                }
                else number[i].style.backgroundColor="#F00";
            }
        }
    }
}
window.onload = loadData();