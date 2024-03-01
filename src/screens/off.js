import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
  const handleAddCourse = () => {
    // Implement your login logic here
    navigation.navigate('AddCourse');

  };
  const handleTestPrep = () => {
    // Implement your login logic here
    navigation.navigate('TestPreparation');

  };
  const handleHistory = () => {
    navigation.navigate('History')
  }
  const handlePricing = () => {
    navigation.navigate('Pricing')
  }
  const handleAccomplishment = () =>{
    navigation.navigate('Accomplishment')
  }
  const handleProfile = () =>{
    navigation.navigate('ProfileScreen')
  }
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Course' }],
          })
        }
      >
        Courses
      </Button>

      <Button
      mode="outlined"
        onPress={handleAddCourse}
      >
        Add course
      </Button>
      <Button
      mode="outlined"
        onPress={handleTestPrep}
      >
        Take Test
      </Button>
      <Button
      mode="outlined"
        onPress={handleHistory}
      >
        History
      </Button>
      <Button
      mode="outlined"
        onPress={handlePricing}
      >
        Pricing
      </Button>
      <Button
      mode="outlined"
        onPress={handleAccomplishment}
      >
        Accomplishment
      </Button>
      <Button
      mode="outlined"
        onPress={handleProfile}
      >
        Profile
      </Button>
    </Background>
  )
}
