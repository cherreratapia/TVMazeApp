import React from 'react'
import {
  View,
  Text,
  Modal,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import styles from './styles'
import setDeviceAuth from '../../../../helpers/auth/setDeviceAuth'

export default function UserPermission(props) {
  const { showModal, setShowModal, setDeviceAuthPermission } = props

  const onGrantAccess = async () => {
    await setDeviceAuth(true)
    setDeviceAuthPermission(true)
    setShowModal(!showModal)
  }

  const onCancelAccess = () => {
    setShowModal(!showModal)
  }

  return (
    <Modal
      animationType="fade"
      visible={showModal}
      onRequestClose={onCancelAccess}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Do you want to use your device authentication?
        </Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={onCancelAccess}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.acceptButton]}
            onPress={onGrantAccess}
          >
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  )
}
