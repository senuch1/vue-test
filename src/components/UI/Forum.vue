<script>
export default {
    name: "Forum",
    props: {
        width: { type: String },
        border: { type: String, required: true },
        background: { type: String, required: true },
        color: { type: String, required: true },
    },
}
</script>

<template>
    <section class="forum">
        <h2 class="forum-title">Форум</h2>
        <p class="forum-description">Место связи сообщевства</p>
        <div class="forum-themes">
            <!-- <div class="">Создать Тему</div> -->
            
        </div>
    </section>
</template>

<style  scoped>
.forum {
    padding-top: 20px;
    width: 1169px;
    margin: 0 auto;
}
.forum-description{
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 26px;
}

.forum-title {
    font-size: 146px;
    color: #00C65E;
    font-family: 'Montserrat', sans-serif;
}
</style>