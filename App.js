import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

// Starter data provided by the registrar
const initialStudents = [
  { id: "s1", name: "Ana Cruz", course: "IT313", units: 21, isFullLoad: true },
  { id: "s2", name: "Bea Santos", course: "IT313", units: 15, isFullLoad: false },
  { id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true },
  { id: "s4", name: "Dex Alonzo", course: "IT313", units: 12, isFullLoad: false },
];

// Requirement 1: Functional component StudentCard with destructured props[cite: 9]
function StudentCard({ name, course, units, isFullLoad }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.text}>Course: {course}</Text>
      <Text style={styles.text}>Units: {units}</Text>
      
      {/* Requirement 2: Conditional rendering with && operator[cite: 9] */}
      {isFullLoad && <Text style={styles.badge}>Full Load</Text>}
    </View>
  );
}

// Requirement 3 & 5: Parent component StudentRoster returning a single root element[cite: 9]
export default function StudentRoster() {
  const [students, setStudents] = useState(initialStudents);
  const [useIndexKey, setUseIndexKey] = useState(false);

  // Function to toggle order for Requirement 6 experiment[cite: 9]
  const reverseList = () => {
    setStudents([...students].reverse());
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Requirement 4: JSX expression with computed length using template literal[cite: 9] */}
      <Text style={styles.header}>
        IT313 Student Roster ({students.length} students)
      </Text>

      {/* Button to test array reversal requirement[cite: 9] */}
      <TouchableOpacity style={styles.button} onPress={reverseList}>
        <Text style={styles.buttonText}>Reverse Roster Order</Text>
      </TouchableOpacity>

      {/* Toggle key experiment mode */}
      <TouchableOpacity 
        style={[styles.button, useIndexKey ? styles.dangerButton : styles.secondaryButton]} 
        onPress={() => setUseIndexKey(!useIndexKey)}
      >
        <Text style={styles.buttonText}>
          Current Key: {useIndexKey ? "Array Index (Experiment)" : "student.id (Stable)"}
        </Text>
      </TouchableOpacity>

      {/* Requirement 3: Render one StudentCard per student using .map()[cite: 9] */}
      {students.map((student, index) => (
        <StudentCard
          key={useIndexKey ? index : student.id} // Requirement 3 & 6 key toggle[cite: 9]
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f4f6f8',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#1e293b',
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#475569',
  },
  dangerButton: {
    backgroundColor: '#dc2626',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 2,
  },
  badge: {
    marginTop: 8,
    alignSelf: 'flex-start',
    backgroundColor: '#dcfce7',
    color: '#15803d',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 'bold',
  },
});