export async function like(e){
    e.preventDefault();
    const result = await axios({
        method: 'put',
        url: `https://URL/${e.target.id}/like`,
        withCredentials: true,
      });
      $("#IDHERE").replaceWith(load());
    return result;
};

export async function unlike(e){
    e.preventDefault();
    const result = await axios({
        method: 'put',
        url: `https://URL/${e.target.id}/unlike`,
        withCredentials: true,
      });
      $("#IDHERE").replaceWith(load());
    return result;
};

export async function post(e){
    e.preventDefault();
    const result = await axios({
        method: 'post',
        url: `https://URL/${e.target.id}`,
        withCredentials: true,
        data: {
            "type": "TYPE HERE?",
            "parent": e.target.id,
            "msg": "MSG HERE",
        },
      });
      $("#IDHERE").replaceWith(load());
    return result;
};

export async function edit(e){
    // CREATE EDIT HERE 

};

export async function sendEdit(e){
    e.preventDefault();
    const result = await axios({
        method: 'put',
        url: `https://URL/${e.target.id}`,
        withCredentials: true,
        data: {
           "msg": "MSG HERE?",
        },
    });
    $('##IDHERE').replaceWith(load());

};

export async function destroy(e){
    e.preventDefault();
    const result = await axios({
        method: 'delete',
        url: `https://URL/${e.target.id}`,
        withCredentials: true,
    });
    $('##IDHERE').replaceWith(load());

};
export async function load(e){
    const $root = $('#root');
    let posts = `HTML HERE`; 
    $root.append(posts);
}

$(function(){
    const $root = $('#root');
    $root.on("click", ".like", like);
    $root.on("click", ".unlike", unlike);
    $root.on("click", ".post", post);
    $root.on("click", ".edit", edit);
    $root.on("click", ".destroy", destroy);
});