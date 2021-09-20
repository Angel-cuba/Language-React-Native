import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ContentLayout from '../components/Layouts/ContentLayout'

const HomeA1 = () => {
     return (
          <ContentLayout>

               <Text>Home of A1</Text>
               <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero veniam praesentium et dolorum in sit natus animi enim deserunt dolor odio consectetur sint ea, ipsum incidunt itaque perferendis a.
               Atque maxime laboriosam velit, voluptatibus repudiandae, neque beatae inventore possimus vel fuga id sit eligendi optio, vero obcaecati perspiciatis. Pariatur, tenetur eaque. Nesciunt numquam accusantium dolorem soluta fugit consectetur fugiat!
               Animi aperiam doloribus, error rem laudantium eum reprehenderit cupiditate eaque quaerat adipisci labore laborum deserunt earum reiciendis officiis suscipit iste cum, esse temporibus voluptates deleniti enim ex. Vitae, eius reprehenderit.
               Repellendus, itaque fuga vel fugiat rem eveniet corrupti, impedit vitae aut vero alias, nulla ducimus cum architecto magni facere veritatis. Adipisci, quae minus! Beatae hic facere debitis ipsa, nobis illum?         
              
               Perspiciatis, tenetur accusantium accusamus, voluptates nesciunt, laudantium expedita laboriosam ea beatae cupiditate voluptate quidem similique. Temporibus saepe est omnis, ratione voluptatibus vero porro illum quibusdam excepturi ipsam reiciendis tempora eos?
               Modi, repudiandae eveniet doloremque blanditiis itaque porro nobis vero cum rem facere! Atque edit eligendi temporibus reprehenderit tenetur officia sequi animi rem blanditiis laboriosam ad voluptates odio molestiae? </Text>
          </ContentLayout>

     )
}
     const styles = StyleSheet.create({
          text:{
               textAlign: 'right',
               padding: 10,
          }
     })

export default HomeA1
