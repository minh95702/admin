let number = document.getElementsByClassName("quest_number")
let correct_option = document.getElementsByClassName("correct");
correct_option = Array.from(correct_option).map(correct_option=>correct_option.id);
let user_option = new Array(234)
for(var i = 0; i<answers.length; i++)
{
    let answer = answers[i].children;
    for(var j = 0; j<answer.length; j++)
    {
        answer[j].onmouseover = function()
        {
            this.style.cursor = "pointer"
        }
        answer[j].addEventListener("click", function()
            {
                if(this.classList.contains("correct")) this.style.backgroundColor = "#0F0";
                else this.style.backgroundColor="#F00";
                number[this.id.split("_")[2]-1].style.backgroundColor=this.style.backgroundColor;
                user_option[this.id.split("_")[2]-1]=this.id;
                let parent = this.parentElement;
                let children = parent.children;
                for(var k = 0; k<children.length; k++)
                {
                    children[k].style.pointerEvents="None";
                    if(children[k].classList.contains("correct")) children[k].style.backgroundColor="#0F0";
                }
                saveData()
            }
        )
    }
}
for(var i=0;i<number.length; i++)
{
    number[i].onmouseleave = function()
    {
        this.style.fontWeight = "normal"
    }
}