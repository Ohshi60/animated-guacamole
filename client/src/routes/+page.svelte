<script>
  import { PUBLIC_GH_CLIENT_ID } from '$env/static/public'
</script>
<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>
<p>{PUBLIC_GH_CLIENT_ID } </p>
<a href={`https://github.com/login/oauth/authorize?scope=user:email&client_id=${PUBLIC_GH_CLIENT_ID}`}>Click here</a>

