import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'

const Notifications = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tạo thói quen</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Tên</Text>
          <TextInput style={styles.input} placeholder="Ví dụ: Tập thể dục" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Câu hỏi</Text>
          <TextInput
            style={styles.input}
            placeholder="v.d. Hôm nay bạn đã tập thể dục chưa?"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Tần suất</Text>
          <TextInput style={styles.input} placeholder="Hàng ngày" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nhắc nhở</Text>
          <TouchableOpacity style={styles.switch}>
            <Text style={styles.switchText}>Tắt</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ghi chú</Text>
          <TextInput style={styles.input} placeholder="(Không bắt buộc)" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  form: {
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 16,
  },
  switch: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  switchText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Notifications