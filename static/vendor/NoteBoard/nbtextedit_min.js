let NB_te_temp_save="";const NB_te_enter=()=>{if(13!=event.which)return!0;let e=window.getSelection().getRangeAt(0);"BLOCKQUOTE"==e.endContainer.tagName&&""==e.endContainer.textContent&&document.execCommand("Outdent")},NB_te_control_p=()=>{let e=window.getSelection();e.getRangeAt(0);"NB_te_post_cont"!=e.anchorNode.parentNode.id&&"NB_te_post_cont"!=e.anchorNode.parentNode.offsetParent.id||document.execCommand("formatBlock",!1,"div")},NB_te_control_h1=()=>{let e=window.getSelection();if(null==e.anchorNode)return;e.getRangeAt(0);"NB_te_post_cont"!=e.anchorNode.parentNode.id&&"NB_te_post_cont"!=e.anchorNode.parentNode.offsetParent.id||document.execCommand("formatBlock",!1,"h1")},NB_te_control_h2=()=>{let e=window.getSelection();if(null==e.anchorNode)return;e.getRangeAt(0);"NB_te_post_cont"!=e.anchorNode.parentNode.id&&"NB_te_post_cont"!=e.anchorNode.parentNode.offsetParent.id||document.execCommand("formatBlock",!1,"h2")},NB_te_control_h3=()=>{let e=window.getSelection();if(null==e.anchorNode)return;e.getRangeAt(0);"NB_te_post_cont"!=e.anchorNode.parentNode.id&&"NB_te_post_cont"!=e.anchorNode.parentNode.offsetParent.id||document.execCommand("formatBlock",!1,"h3")},NB_te_control_h4=()=>{let e=window.getSelection();if(null==e.anchorNode)return;e.getRangeAt(0);"NB_te_post_cont"!=e.anchorNode.parentNode.id&&"NB_te_post_cont"!=e.anchorNode.parentNode.offsetParent.id||document.execCommand("formatBlock",!1,"h4")},NB_te_control_bold=()=>{let e=window.getSelection();if(null==e.anchorNode)return;e.getRangeAt(0);"NB_te_post_cont"!=e.anchorNode.parentNode.id&&"NB_te_post_cont"!=e.anchorNode.parentNode.offsetParent.id||document.execCommand("bold")},NB_te_control_italic=()=>{let e=window.getSelection();if(null==e.anchorNode)return;e.getRangeAt(0);"NB_te_post_cont"!=e.anchorNode.parentNode.id&&"NB_te_post_cont"!=e.anchorNode.parentNode.offsetParent.id||document.execCommand("italic")},NB_te_control_strike=()=>{let e=window.getSelection();if(null==e.anchorNode)return;e.getRangeAt(0);"NB_te_post_cont"!=e.anchorNode.parentNode.id&&"NB_te_post_cont"!=e.anchorNode.parentNode.offsetParent.id||document.execCommand("StrikeThrough")},NB_te_control_quote=()=>{let e=window.getSelection();if(null==e.anchorNode)return;e.getRangeAt(0);if("NB_te_post_cont"==e.anchorNode.parentNode.id||"NB_te_post_cont"==e.anchorNode.parentNode.offsetParent.id)if(document.execCommand("insertParagraph"),null!=e.modify)e.modify("move","backward","line"),document.execCommand("formatBlock",!1,"blockquote");else{let t=document.createElement("blockquote");t.setAttribute("contentEditable","true"),e.focusNode.before(t),t.focus(),document.execCommand("formatBlock",!1,"div")}},NB_te_control_link=(e=!1)=>{let t=window.getSelection();if(null==t.anchorNode)return;t.getRangeAt(0);if("NB_te_post_cont"!=t.anchorNode.parentNode.id&&"NB_te_post_cont"!=t.anchorNode.parentNode.offsetParent.id)return;let o=document.createElement("div");o.id="NB_te_create_link_cont",o.classList.add("NB_link_input_cont","noselect"),o.setAttribute("contentEditable","false");let n=document.createElement("div");n.classList.add("NB_link_input_content");let c=document.createElement("span"),l="제목";e&&(l="Title"),c.textContent=l;let r=document.createElement("input"),d="제목을 입력해주세요.";e&&(d="Enter the link name."),Object.assign(r,{type:"text",max:50,placeholder:d,autocomplete:"off"}),n.append(c,r),o.append(n),r.onblur=(()=>{NB_te_remove_link()}),(n=document.createElement("div")).classList.add("NB_link_input_content"),l="링크",e&&(l="Link"),(c=document.createElement("span")).textContent=l,r=document.createElement("input"),d="URL을 입력해주세요.",e&&(d="Enter the URL."),Object.assign(r,{type:"text",max:1e3,placeholder:d,autocomplete:"off"}),n.append(c,r),o.append(n),r.onblur=(()=>{NB_te_remove_link()});let _=document.createElement("div");_.classList.add("NB_link_done_btn");let i="확인";e&&(i="Create"),_.textContent=i,o.append(_),_.onclick=(()=>{NB_te_create_link(o)}),null!=t.modify&&t.modify("move","backward","line"),t.focusNode.parentNode.classList.contains("NB_link_btn")?t.focusNode.parentNode.parentNode.after(o):null==t.focusNode.nextSibling?t.focusNode.after(o):(null!=t.modify&&t.modify("forward",!1,"line"),t.focusNode.nextSibling.append(o)),document.querySelector("#NB_te_create_link_cont > .NB_link_input_content > input").focus()},NB_te_remove_link=()=>{window.getSelection().getRangeAt(0);for(let e of document.querySelectorAll(".NB_link_input_cont"))""==e.querySelectorAll("input")[0].value&&""==e.querySelectorAll("input")[1].value&&e.remove()},NB_te_create_link=e=>{for(let t of e.querySelectorAll("input"))if(""==t.value)return t.focus(),!1;let t=e.querySelectorAll("input")[0].value,o=e.querySelectorAll("input")[1].value,n=document.createElement("div"),c=document.createElement("a");c.textContent=t,c.classList.add("NB_link_btn"),Object.assign(c,{contentEditable:"true",target:"_blank",href:o}),n.textContent=" ",n.append(c),e.remove();let l=window.getSelection(),r=(l.getRangeAt(0),l.anchorNode);for(;"NB_te_post_cont"!=r.id&&"NB_te_post_cont"!=r.parentNode.id;)r=r.parentNode;null!=l.modify&&l.modify("forward",!1,"line"),"NB_te_post_cont"==r.id?r.append(n):null!=r.tagName&&r.querySelector("a")?r.before(n):null!=r.childNodes[0]&&"BR"==r.childNodes[0].tagName?r.append(n):r.after(n),null!=l.modify&&l.modify("move","forward","paragraph")},NB_te_control_image=()=>{let e=document.querySelector("#NB_te_control_image_content"),t=URL.createObjectURL(e.files[0]),o=window.getSelection();console.log(t),console.log(e.files[0]);let n=document.createElement("img");n.classList.add("NB_img_cont"),n.setAttribute("src",t),o.focusNode.after(n)},NBnote=(e="#12b886",t=!0,o=!0,n=!1)=>{this.newControlElement=(e=>{let t=document.createElement(e);return t.classList.add("NB_te_control_box"),t}),this.newControlBreak=(()=>{let e=document.createElement("div");return e.classList.add("NB_te_control_box_break"),e}),document.querySelector(":root").style.setProperty("--NBnote-color",e);let c=document.createElement("div");c.classList.add("NB_te_cont");let l=document.createElement("div");l.classList.add("NB_te_title_cont");let r=document.createElement("input");r.classList.add("NB_te_title_input");let d="제목을 입력해주세요.";n&&(d="Enter your title."),Object.assign(r,{id:"NB_te_title_input",type:"text",placeholder:d,autocomplete:"off"}),l.append(r);let _=document.createElement("div");_.classList.add("NB_te_control_cont","NB_noselect");let i=this.newControlElement("div");if(i.id="NB_te_control_p",i.textContent="P",_.append(i),i.onclick=(()=>{NB_te_control_p()}),(i=this.newControlElement("div")).id="NB_te_control_h1",i.textContent="H1",i.onclick=(()=>{NB_te_control_h1()}),_.append(i),(i=this.newControlElement("div")).id="NB_te_control_h2",i.textContent="H2",i.onclick=(()=>{NB_te_control_h2()}),_.append(i),(i=this.newControlElement("div")).id="NB_te_control_h3",i.textContent="H3",i.onclick=(()=>{NB_te_control_h3()}),_.append(i),(i=this.newControlElement("div")).id="NB_te_control_h4",i.textContent="H4",i.onclick=(()=>{NB_te_control_h4()}),_.append(i),_.append(this.newControlBreak()),(i=this.newControlElement("div")).id="NB_te_control_bold",i.textContent="B",i.onclick=(()=>{NB_te_control_bold()}),_.append(i),(i=this.newControlElement("div")).id="NB_te_control_italic",i.textContent="I",i.onclick=(()=>{NB_te_control_italic()}),_.append(i),(i=this.newControlElement("div")).id="NB_te_control_strike",i.textContent="T",i.style.textDecoration="line-through",i.onclick=(()=>{NB_te_control_strike()}),_.append(i),_.append(this.newControlBreak()),(i=this.newControlElement("div")).id="NB_te_control_quote",i.textContent="「 」",i.onclick=(()=>{NB_te_control_quote()}),_.append(i),t&&((i=this.newControlElement("div")).id="NB_te_control_link",i.textContent="∝",i.onclick=(()=>{NB_te_control_link(n)}),_.append(i)),o){(i=this.newControlElement("div")).id="NB_te_control_image";let e=document.createElement("input");Object.assign(e,{id:"NB_te_control_image_content",type:"file"}),e.accept="img/*",e.onchange=(()=>{NB_te_control_image()}),i.append(e),i.append("⇧"),i.onclick=(()=>{NB_te_control_image()}),i.onclick=(()=>{let e=window.getSelection();if(null==e.anchorNode)return;e.getRangeAt(0);"NB_te_post_cont"!=e.anchorNode.parentNode.id&&"NB_te_post_cont"!=e.anchorNode.parentNode.offsetParent.id||document.querySelector("#NB_te_control_image_content").click()}),_.append(i)}let a=document.createElement("div");a.id="NB_te_post_cont",a.classList.add("NB_te_post_cont");let N="내용을 입력해주세요.";n&&(N="Enter your contents."),a.setAttribute("placeholder",N),Object.assign(a,{id:"NB_te_post_cont",contentEditable:"true",spellcheck:"false"}),a.onkeypress=(()=>{NB_te_enter()}),c.append(l),c.append(_),c.append(a),document.querySelector("#NB-texteditor").append(c)},NBnoteData=(e=!1,t=!1,o=!1)=>{let n=new FormData;if(e){let e=document.querySelector("#NB_te_title_input").value.trim();if(""==e)return document.querySelector("#NB_te_title_input").focus(),"Error: title empty";n.append("title",e)}if(o)for(let e of NB_te_Img_files)n.append("images",e,e.name);if(t){let e=document.querySelector("#NB_te_post_cont").innerHTML.trim();if(""==e)return document.querySelector("#NB_te_post_cont").focus(),"Error: post empty";let t=document.createElement("div");t.id="NB_hidden_post",t.classList.add("NB_display_none"),t.innerHTML=e,document.querySelector("body").append(t);for(let e of document.querySelectorAll("a"))e.removeAttribute("contentEditable");e=document.querySelector("#NB_hidden_post").innerHTML.trim(),document.querySelector("#NB_hidden_post").remove(),n.append("post",e)}return n};