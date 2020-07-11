const posts = [
	{
		title: 'The last of Us Part II',
		slug: 'the-last-of-us-part-II',
		image: 'https://psmedia.playstation.com/is/image/psmedia/the-last-of-us-part-2-standard-pack-digital-01-ps4-gb-26sep19_1569503463827?$Icon$',
		html: `
			<p>Confront the devastating physical and emotional repercussions of Ellie's actions</p>
			<p>Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors.

			When a violent event disrupts that peace, Ellie embarks on a relentless journey to carry out justice and find closure. As she hunts those responsible one by one, she is confronted with the devastating physical and emotional repercussions of her actions.</p>
		`
	},

	{
		title: 'Halo: The Master Chief Collection for PC',
		slug: 'the-master-chief-collection-for-PC',
		image: 'https://compass-ssl.xbox.com/assets/79/03/790386b3-d885-4909-95aa-dcccea1614f7.jpg?n=Halo-MCC_Image-0_Boxshot-Halo3_321x484_02.jpg',
		html: `
			<h2>The Great Journey on PC continues with Halo 3</h2>
			<p>The Master Chief’s iconic journey includes six games, built for PC and collected in a single integrated experience where each game is delivered over time. Whether you’re a long-time fan or meeting Spartan 117 for the first time, The Master Chief Collection is the definitive Halo gaming experience.</p>
		`
	},

	{
		title: 'GameStop\'s Internal Database Lists Multiple New SKUs For Nintendo Switch',
		slug: 'gamestop\'s-internal-database-lists-multiple-ne-skus-for-fintendo-switch',
		image: 'https://images.nintendolife.com/489651d975214/skus.900x.jpg',
		html: `
			<p>As you might have already heard, there have been rumours swirling around the internet for the past week about a possible Nintendo Direct broadcast taking place later this month, on 20th July.</p>

			<p>It all stems from an insider, who goes by the name Kelios on ResetEra. According to VGC, this user previously leaked accurate timings related to Nintendo Directs - including the mini one, which took place earlier this year in March.</p>

			<p>Now, to help fire up this rumour, a new batch of Switch SKUs have surfaced on GameStop's internal database. As can be seen in the image below, there are four unannounced Switch games on the list. Each one has a tentative release date of 31st December 2020 and a placeholder price of $59.99.</p>

			<p>The following GameStop notice - about Nintendo of America performing maintenance on its retail integration services, on 14th July - has also been doing the rounds, but there is no guarantee there is a connection between this and the above-listed SKUs.
			</p>

			<p></p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
