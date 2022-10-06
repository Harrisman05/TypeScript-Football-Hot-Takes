export function textareaResize() {
    const text = document.querySelector("#opinion_input") as HTMLTextAreaElement;
    console.log(text);
    text.style.cssText = `height: ${text.scrollHeight}px; overflow-y: hidden`;

    text.addEventListener("input", function() {
        this.style.height = "auto";
        this.style.height = `${this.scrollHeight}px`
    });
}