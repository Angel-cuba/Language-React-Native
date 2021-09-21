import React from 'react';
import { ScrollView, Text, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ContentLayout from '../components/Layouts/ContentLayout';

const image = {
	uri: 'https://res.cloudinary.com/dqaerysgb/image/upload/v1632245932/paris_mulhc4.jpg',
};

const HomeA1 = () => {
	return (
		<ContentLayout>
			<ImageBackground source={image} resizeMode="cover" style={styles.image}>
				         <LinearGradient
				// Background Linear Gradient
				colors={['rgba(255,255,255,0.12)','rgba(0,0,0,0.2131)', 'silver' ]}
				style={styles.background}
			/>
                    <ScrollView>

                
					<Text>Home of A1</Text>
					<Text style={styles.text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero veniam praesentium et
						dolorum in sit natus animi enim deserunt dolor odio consectetur sint ea, ipsum incidunt
						itaque perferendis a. Atque maxime laboriosam velit, voluptatibus repudiandae, neque
						beatae inventore possimus vel fuga id sit eligendi optio, vero obcaecati perspiciatis.
						Pariatur, tenetur eaque. Nesciunt numquam accusantium dolorem soluta fugit consectetur
						fugiat! Animi aperiam doloribus, error rem laudantium eum reprehenderit cupiditate eaque
						quaerat adipisci labore laborum deserunt earum reiciendis officiis suscipit iste cum,
						esse temporibus voluptates deleniti enim ex. Vitae, eius reprehenderit. Repellendus,
						itaque fuga vel fugiat rem eveniet corrupti, impedit vitae aut vero alias, nulla ducimus
						cum architecto magni facere veritatis. Adipisci, quae minus! Beatae hic facere debitis
						ipsa, nobis illum? Perspiciatis, tenetur accusantium accusamus, voluptates nesciunt,
						laudantium expedita laboriosam ea beatae cupiditate voluptate quidem similique.
						Temporibus saepe est omnis, ratione voluptatibus vero porro illum quibusdam excepturi
						ipsam reiciendis tempora eos? Modi, repudiandae eveniet doloremque blanditiis itaque
						porro nobis vero cum rem facere! Atque edit eligendi temporibus reprehenderit tenetur
						officia sequi animi rem blanditiis laboriosam ad voluptates odio molestiae?
						Perspiciatis, tenetur accusantium accusamus, voluptates nesciunt, laudantium expedita
						laboriosam ea beatae cupiditate voluptate quidem similique. Temporibus saepe est omnis,
						ratione voluptatibus vero porro illum quibusdam excepturi ipsam reiciendis tempora eos?
						Modi, repudiandae eveniet doloremque blanditiis itaque porro nobis vero cum rem facere!
						Atque edit eligendi temporibus reprehenderit tenetur officia sequi animi rem blanditiis
						laboriosam ad voluptates odio molestiae? Perspiciatis, tenetur accusantium accusamus,
						voluptates nesciunt, laudantium expedita laboriosam ea beatae cupiditate voluptate
						quidem similique. Temporibus saepe est omnis, ratione voluptatibus vero porro illum
						quibusdam excepturi ipsam reiciendis tempora eos? Modi, repudiandae eveniet doloremque
						blanditiis itaque porro nobis vero cum rem facere! Atque edit eligendi temporibus
						reprehenderit tenetur officia sequi animi rem blanditiis laboriosam ad voluptates odio
						molestiae?{' '}
					</Text>
				</ScrollView>
			</ImageBackground>
		</ContentLayout>
	);
};
const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		padding: 5,
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
	},
	image: {
		flex: 1,
		justifyContent: 'center',
	},
	background: {
		position: 'absolute',
		left: -140,
		// right: 0,
		top: 260,
		width: 350,
          height: 350,
          borderRadius:100,
          borderRightWidth: 7,
          borderRightColor: 'rgba(0,0,0,.0234)',
	},
});

export default HomeA1;
