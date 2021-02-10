const imgPath = "https://pngimage.net/wp-content/uploads/2018/06/user-logo-png-5.png";

var data = {
             "accounts" : [
            {
              "title" : "Some info 1",
              "img" : imgPath
            },
            {
              "title" : "Some info 2",
              "img" : imgPath
            },
            {
              "title" : "Some info 3",
              "img" : imgPath
            }
          ]
        }


function ButtonAdd_Screen1()
{
  var showList_Screen1 = document.getElementById("divForList");
  showList_Screen1.style.display = "none";
  var showAddButton_Screen1 = document.getElementById("divForButton");
  showAddButton_Screen1.style.display = "none";
  var showScreen2 = document.getElementById("Screen_2");
  showScreen2.style.display = "block";
  document.getElementById("textField").focus();
  butonKeeper = undefined;
}


function showElements()
{
    var objectLength = data.accounts.length;
    for (var i = 0; i < objectLength; i++)
    {
      var newDiv = document.createElement("div");
      var newImg = document.createElement("img");
      var newInf = document.createElement("span");
      newImg.src = data.accounts[i].img;
      newInf.innerHTML = data.accounts[i].title;
      newDiv.appendChild(newImg);
      newDiv.appendChild(newInf);

      var currentDiv = document.getElementById("startList");
      newDiv.setAttribute("tabIndex", "0");
      newDiv.setAttribute("class", "highlight");
      newDiv.setAttribute("id", i);
      newDiv.setAttribute("tabindex", -1)

      var divToAdd = document.getElementById("divForList");
      divToAdd.insertBefore(newDiv, currentDiv);
    }
    document.getElementById("0").focus();
    var showScreen2 = document.getElementById("Screen_2");
    showScreen2.style.display = "none";
}


function ButtonCancel()
{
    document.getElementById("textField").value = "";
    var showList_Screen1 = document.getElementById("divForList");
    showList_Screen1.style.display = "block";
    var showAddButton_Screen1 = document.getElementById("divForButton");
    showAddButton_Screen1.style.display = "block";
    var showScreen2 = document.getElementById("Screen_2");
    showScreen2.style.display = "none";
    document.getElementById("0").focus();
}

function ButtonAdd_Screen2()
{
    var newTitle = document.getElementById("textField").value;
    if (newTitle.length == 0) {
      alert("You haven't entered any info");
      return;
    }

    data.accounts.push({
      "title" : newTitle,
      "img" : imgPath
    });
    var divToClear = document.getElementById('divForList');
    while(divToClear.firstChild){
    divToClear.removeChild(divToClear.firstChild);
    }
    showElements();
    ButtonCancel();
}


var idKeeper;
var butonKeeper;
window.addEventListener('keydown', function(event) {
var isList = document.activeElement.className;
var isID = document.activeElement.id;
    if (event.keyCode == "40" && isList == "highlight")
    {
      var newID = (parseInt(document.activeElement.id) + 1).toString();
      document.getElementById(newID).focus();
    }
    if (event.keyCode == "38" && isList == "highlight")
    {
      var newID = (parseInt(document.activeElement.id) - 1).toString();
      document.getElementById(newID).focus();
    }
    if (event.keyCode == "37" && isList == "highlight")
    {
      var getID = parseInt(document.activeElement.id);
      data.accounts.splice(getID, 1);
      var divToClear = document.getElementById('divForList');
      while(divToClear.firstChild){
      divToClear.removeChild(divToClear.firstChild);
      }
      showElements();
    }
    if (event.keyCode == "39" && isList == "highlight" || data.accounts.length == 0)
    {
      idKeeper = document.activeElement.id;
      document.getElementById("addButton").focus();
    }
    if (event.keyCode == "37" && isID == "addButton")
    {
      document.getElementById(idKeeper).focus();
    }
    if (event.keyCode == "40" && isID == "textField")
    {
      if (butonKeeper === undefined || butonKeeper == "addButton2")
      {
        document.getElementById("addButton2").focus();
        butonKeeper = "addButton2";
      }
      else
      {
        document.getElementById("cancelButton").focus();
        butonKeeper = "cancelButton";
      }
    }
    if (event.keyCode == "39" && isID == "addButton2")
    {
      butonKeeper = "cancelButton";
      document.getElementById("cancelButton").focus();
    }
    if (event.keyCode == "37" && isID == "cancelButton")
    {
      butonKeeper = "addButton2";
      document.getElementById("addButton2").focus();
    }
    if (event.keyCode == "38")
    {
      if (isID == "addButton2" || isID == "cancelButton") {
        document.getElementById("textField").focus();
      }
    }
});
