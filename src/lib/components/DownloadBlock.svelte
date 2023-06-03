<script>
	import ChromeBrand from "svelte-awesome-icons/ChromeBrand.svelte";
	import FirefoxBrand from "svelte-awesome-icons/FirefoxBrand.svelte";
	import OperaBrand from "svelte-awesome-icons/OperaBrand.svelte";
	import EdgeBrand from "svelte-awesome-icons/EdgeBrand.svelte";
</script>

<ul class="flex">
	<li>
		<a
			href="https://chrome.google.com/webstore/detail/popupoff-popup-and-overla/ifnkdbpmgkdbfklnbfidaackdenlmhgh"
			target="_blank"
			rel="noreferrer"
			class="p-2 block"
			aria-description="Link to download for Chrome browser"
		>
			<ChromeBrand
				size="60"
				class="transition-colors hover:text-accent"
			/>
		</a>
	</li>
	<li>
		<a
			href="https://addons.mozilla.org/en-US/firefox/addon/popupoff/"
			target="_blank"
			rel="noreferrer"
			class="p-2 block"
			aria-description="Link to download for Firefox browser"
		>
			<FirefoxBrand
				size="60"
				class="transition-colors hover:text-accent"
			/>
		</a>
	</li>
	<li>
		<a
			href="https://addons.opera.com/en/extensions/details/popupoff-popup-and-overlay-blocker/"
			target="_blank"
			rel="noreferrer"
			class="p-2 block"
			aria-description="Link to download for Opera browser"
		>
			<OperaBrand
				size="60"
				class="transition-colors hover:text-accent"
			/>
		</a>
	</li>
	<li>
		<a
			href="https://microsoftedge.microsoft.com/addons/detail/elacdkdmimelpnkbccdanmnabhajdccm"
			target="_blank"
			rel="noreferrer"
			class="p-2 block"
			aria-description="Link to download for Edge browser"
		>
			<EdgeBrand
				size="60"
				class="transition-colors hover:text-accent"
			/>
		</a>
	</li>
</ul>
