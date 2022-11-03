<script>
	import { fade } from 'svelte/transition';
	import '$css/style.scss';
	import Header from '$components/header.svelte';
	import Footer from '$components/footer.svelte';
</script>

<Header />
<slot />
<Footer />
