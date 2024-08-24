import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  header: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
  },
  enterpriseDetails: {
    marginBottom: 20,
    fontSize: 12,
  },
  profiles: {
    marginBottom: 10,
  },
  profile: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  profileDetails: {
    fontSize: 12,
  },
  profileText: {
    marginBottom: 4,
  },
});

// Create Document Component
const MyDocument = () => (
  <PDFViewer className="w-full h-full">
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Information of Enterprises</Text>

        <View style={styles.enterpriseDetails}>
          <Text>Name of the Enterprise: Biya chicken farm</Text>
          <Text>Total Number of Organized People: 3</Text>
          <Text>Registered Date: [Registered Date]</Text>
          <Text>Status: Pass, Active, Promoted</Text>
          <Text>Location: [Location]</Text>
          <Text>Shade Number: AA-001</Text>
        </View>

        <View style={styles.profiles}>
          <Text>Profiles of Individuals</Text>

          {/* Profile 1 */}
          <View style={styles.profile}>
            <Image
              style={styles.profileImage}
              src="[Image URL]" // Replace with the actual image URL
            />
            <View style={styles.profileDetails}>
              <Text style={styles.profileText}>First Name: [First Name]</Text>
              <Text style={styles.profileText}>Middle Name: [Middle Name]</Text>
              <Text style={styles.profileText}>Last Name: [Last Name]</Text>
              <Text style={styles.profileText}>Sex: [Sex]</Text>
              <Text style={styles.profileText}>Age: [Age]</Text>
              <Text style={styles.profileText}>
                Educational Status: [Educational Status]
              </Text>
            </View>
          </View>

          {/* Profile 2 */}
          <View style={styles.profile}>
            <Image
              style={styles.profileImage}
              src="[Image URL]" // Replace with the actual image URL
            />
            <View style={styles.profileDetails}>
              <Text style={styles.profileText}>First Name: [First Name]</Text>
              <Text style={styles.profileText}>Middle Name: [Middle Name]</Text>
              <Text style={styles.profileText}>Last Name: [Last Name]</Text>
              <Text style={styles.profileText}>Sex: [Sex]</Text>
              <Text style={styles.profileText}>Age: [Age]</Text>
              <Text style={styles.profileText}>
                Educational Status: [Educational Status]
              </Text>
            </View>
          </View>

          {/* Profile 3 */}
          <View style={styles.profile}>
            <Image
              style={styles.profileImage}
              src="[Image URL]" // Replace with the actual image URL
            />
            <View style={styles.profileDetails}>
              <Text style={styles.profileText}>First Name: [First Name]</Text>
              <Text style={styles.profileText}>Middle Name: [Middle Name]</Text>
              <Text style={styles.profileText}>Last Name: [Last Name]</Text>
              <Text style={styles.profileText}>Sex: [Sex]</Text>
              <Text style={styles.profileText}>Age: [Age]</Text>
              <Text style={styles.profileText}>
                Educational Status: [Educational Status]
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default MyDocument;
