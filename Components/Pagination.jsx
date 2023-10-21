import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';

const Pagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const windowWidth = useWindowDimensions().width;
  const scrollViewRef = React.createRef();
  useScrollToTop(scrollViewRef);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.paginationData}>
        {currentItems.map((item, index) => (
          <View key={index}>{item}</View>
        ))}
      </View>

      <View style={styles.paginationContainer}>
        <View style={styles.pageButtonContainer}>
          {totalPages !== 1 &&
            Array.from({ length: totalPages }, (_, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handlePageChange(index + 1)}
                style={[
                  styles.pageButton,
                  currentPage === index + 1 ? styles.activePage : {},
                ]}
                disabled={currentPage === index + 1}
              >
                <Text style={styles.pageButtonText}>{index + 1}</Text>
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  contentContainer: {
    alignItems: 'center',
  },
  paginationData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  paginationContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  pageButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageButton: {
    backgroundColor: '#007bff',
    padding: 8,
    margin: 2,
    marginLeft: 10,
    borderRadius: 50,
  },
  pageButtonText: {
    color: 'white',
  },
  activePage: {
    backgroundColor: '#0056b3',
  },
});

export default Pagination;
