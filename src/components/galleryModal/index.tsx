import React from 'react';
import { View, Text, Modal,Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Icons} from '../../assets';
import strings from '../../utils/strings';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../navigation/ScreenNames';

interface GalleryModalProps {
  visible: boolean;
  closeModal: () => void;
  onImagePick: (source: 'gallery' | 'camera') => void;
}

const GalleryModal = ({ visible, closeModal, onImagePick }: GalleryModalProps) => {
  const navigation =useNavigation();
  const handleNavigateToAvatar = () => {
    closeModal(); 
    (navigation as any).navigate(ScreenNames.avatar); 
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <Text style={styles.title}>{strings.profileTextModal}</Text>
              <Image source={Icons.lineIcon} style={styles.lineIcon} />
              <View style={styles.modalView}>
                <TouchableOpacity onPress={() => onImagePick('gallery')}>
                  <View style={styles.optionContainer}>
                    <Image source={Icons.galleryIcon} style={styles.optionIcon} />
                    <Text style={styles.modalOptionText}>{strings.uploadGalleryText}</Text>
                    <Image source={Icons.rightArrowIcon} style={styles.rightIcon} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onImagePick('camera')}>
                  <View style={styles.optionContainer}>
                    <Image source={Icons.cameraIcon} style={styles.optionIcon} />
                    <Text style={styles.modalOptionText}>{strings.cameraText}</Text>
                    <Image source={Icons.rightArrowIcon} style={styles.rightIcon} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity  onPress={handleNavigateToAvatar}>
                  <View style={styles.optionContainer}>
                    <Image source={Icons.avatarIcon} style={styles.optionIcon} />
                    <Text style={styles.modalOptionText}>{strings.avatarText}</Text>
                    <Image source={Icons.rightArrowIcon} style={styles.rightIcon} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};



export default GalleryModal;