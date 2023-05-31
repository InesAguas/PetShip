<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style="width: 280px;">
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a class="nav-link" :class="{ 'active': activeSection === 'dashboard' }" @click="setActiveSection('dashboard')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-grid-1x2" viewBox="0 0 16 16">
                        <path
                            d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z" />
                    </svg>
                    Dashboard
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-body-emphasis" :class="{ active: activeSection === 'mensagens' }"
                    @click="setActiveSection('mensagens')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-envelope-open" viewBox="0 0 16 16">
                        <path
                            d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" />
                    </svg>
                    Mensagens
                </a>
            </li>
            <li>
                <router-link to="/dashboard/anuncios" class="nav-link link-body-emphasis" :class="{ active: activeSection === 'anuncios' }"
                    @click="setActiveSection('anuncios')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layers"
                        viewBox="0 0 16 16">
                        <path
                            d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
                    </svg>
                    Anúncios
                </router-link>
            </li>
            <li>
                <a href="#" class="nav-link link-body-emphasis" :class="{ active: activeSection === 'stock' }"
                    @click="setActiveSection('stock')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box"
                        viewBox="0 0 16 16">
                        <path
                            d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                    </svg>
                    Stock
                </a>
            </li>
            <li>
                <router-link to="/dashboard/animais" class="nav-link link-body-emphasis" :class="{ active: activeSection === 'animais' }"
                    @click="setActiveSection('animais')">
                    <svg class="bi pe-none me-2" width="16" height="16">
                        <use xlink:href="#people-circle"></use>
                    </svg>
                    Animais
                </router-link>
            </li>
            <li>
                <a href="#" class="nav-link link-body-emphasis" :class="{ active: activeSection === 'escalas' }"
                    @click="setActiveSection('escalas')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-calendar-week" viewBox="0 0 16 16">
                        <path
                            d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                        <path
                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg>
                    Escalas
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-body-emphasis" :class="{ active: activeSection === 'perfil' }"
                    @click="setActiveSection('perfil')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person"
                        viewBox="0 0 16 16">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                    Perfil
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-body-emphasis" :class="{ active: activeSection === 'logout' }"
                    @click="setActiveSection('logout')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-power"
                        viewBox="0 0 16 16">
                        <path d="M7.5 1v7h1V1h-1z" />
                        <path
                            d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
                    </svg>
                    Logout
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'PainelDashboard',
    components: {
    },
    data() {
        return {
            activeSection: 'dashboard'
        }
    },
    mounted() {
    },
    methods: {
        setActiveSection(section) {
            this.activeSection = section;
        }
    }
}

</script>
<style>
.nav-link.active {
  background-color: #FD7E14 !important;
  color:white !important;
}
.nav-link{
    color: black !important;

}
</style>