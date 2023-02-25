<svelte:head>
	<title>Shows and Exhibitions | Brenda Bennett Art</title>
</svelte:head>

<div class="container">
	<h1>Shows and Exhibitions</h1>
	<div class="contentBlock block1">
		<div class="imgContainer">
			<img
				src={`https://res.cloudinary.com/drst9cyhc/image/upload/f_auto,q_auto,w_500/v1668539933/dennison`}
				alt="Dennison Craft Fair"
				loading="lazy"
			/>
			<p class="caption">Dennison Elementary School Craft Fair, November 2014</p>
		</div>
		<p>
			Beginning as a hobby and respite on a small card table in the basement of her home, when a
			close friend encouraged her to show her work, Brenda debuted her artwork in 2014 at her
			children’s elementary school craft fair. Anxious at first because her work was different, she
			was received well. After two years at this small event, Brenda approached a local gallery for
			Colorado artisans, and her artwork has been available at A Touch of Colorado in Lakewood’s
			chic Belmar shopping district ever since.
		</p>
		<div class="imgContainer">
			<img
				src={`https://res.cloudinary.com/drst9cyhc/image/upload/f_auto,q_auto,w_500/v1668539933/gilpin`}
				alt="Dennison Craft Fair"
				loading="lazy"
			/>
			<p class="caption">Gilpin Arts 70th Annual Juried Exhibition, June 3, 2017</p>
		</div>
	</div>
	<p>
		An anonymous donation toward an art entry fee in the Spring of 2017 gave her the courage to
		apply and be selected for her first juried show. In Summer of 2017, two of her three entries
		were welcomed in the Gilpin Arts 70th Annual Juried Exhibition, the longest annual juried art
		show in the West. Since then she was invited to be the premier artist featured at a First Friday
		Artwalk in Colorado Springs.
	</p>
	<div class="imgBlock">
		<div class="imgContainer">
			<img
				src={`https://res.cloudinary.com/drst9cyhc/image/upload/f_auto,q_auto,w_700/v1668539933/FirstFridayArtShow`}
				alt="First Friday Art Show"
				loading="lazy"
			/>
		</div>
		<div class="imgContainer">
			<img
				src={`https://res.cloudinary.com/drst9cyhc/image/upload/f_auto,q_auto,w_700/v1668539933/FirstFridayArtShow2`}
				alt="First Friday Art Show"
				loading="lazy"
			/>
		</div>
	</div>
	<p>
		Most exciting of all, Brenda was commissioned to create work for production of an Artists Series
		clothing accessory, being sold in retail shops at all Vail Resorts-owned ski facilities in North
		America during the 2018-2019 winter season.
	</p>

	<p>
		August 2018 brought her first festival, in the Emerging Artist category at the Evergreen Fine
		Arts Festival. The experience gave her the confidence and courage to show in the Foothills Fine
		Arts Festival in Golden, and the Main Street to the Rockies Art Festival in Frisco, Colorado
		Summer of 2019. With aspirations to show in the Cherry Creek Fine Arts Festival someday, it will
		be exciting to see what the future holds for this unique, self-taught artist.
	</p>
</div>

<style lang="scss">
	.caption {
		font-size: 14px;
		color: var(--primaryColor);
	}
	.contentBlock {
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		gap: 30px;
		@media (max-width: 900px) {
			grid-template-columns: 1fr 2fr;
		}
		@media (max-width: 600px) {
			grid-template-columns: 1fr;
		}
		div {
			justify-self: start;
		}
		p {
			margin: 0;
		}
	}
	.imgBlock {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 30px;
	}
</style>
