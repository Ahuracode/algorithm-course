// دکمه‌ی «مشاهده N تِرِد دیگه» در صفحه‌ی فهرست تردها: به‌جای رفتن به صفحه‌ی فصل،
// تردهای اضافه‌ی همان فصل را همان‌جا نمایش می‌دهد (و با کلیک دوباره جمع می‌کند).
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-expand-btn]").forEach(btn => {
        const group = btn.closest(".thread-group")
        if(!group) return

        btn.addEventListener("click", () => {
            const expanded = group.classList.toggle("expanded")
            btn.textContent = expanded
                ? (btn.dataset.lessText || "نمایش کمتر")
                : (btn.dataset.moreText || "مشاهده تِرِد های بیشتر")
        })
    })
})
