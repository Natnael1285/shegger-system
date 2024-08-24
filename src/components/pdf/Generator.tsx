import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";

// Define styles using ReactPDF's StyleSheet.create
const styles = StyleSheet.create({
  page: {
    fontSize: 14,
    position: "relative",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    position: "absolute",
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  innerContainer: {
    width: "95%",
    height: "92.5%",
    backgroundColor: "#FFFBFB",
    position: "absolute",
    top: "3%",
    left: "3%",
    overflow: "hidden",
  },
  redBackground: {
    width: "90%",
    height: "90%",
    backgroundColor: "#FF0000",
    position: "absolute",
    top: "6%",
    left: "5%",
    overflow: "hidden",
  },
  imageBackground: {
    width: "86%",
    height: "84%",
    position: "absolute",
    top: "9%",
    left: "6%",
    overflow: "hidden",
  },
  contentBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    opacity: 1,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  certificateContent: {
    padding: 20,
    boxSizing: "border-box",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 0,
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
});

const CertificatePDF = ({
  name,
  date,
  details,
}: {
  name?: string;
  date?: string;
  details?: string;
}) => (
  <PDFViewer className="w-full h-full">
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.redBackground}>
              <View style={styles.imageBackground}>
                <Image src="../images/v24_1226.png" />
                <View style={styles.contentBackground}>
                  <View style={styles.certificateContent}>
                    <Text style={styles.title}>Certificate of Achievement</Text>
                    <Text style={styles.text}>Name: {name}</Text>
                    <Text style={styles.text}>Date: {date}</Text>
                    <Text style={styles.text}>Details: {details}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default CertificatePDF;
