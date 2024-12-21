platform :ios, '11.0'

target 'YourProject' do
  # Pods for YourProject
  pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'
  # Thêm các pod khác nếu cần

  target 'YourProjectTests' do
    inherit! :search_paths
    # Pods for testing
  end

  # Đảm bảo rằng bạn đã thêm Flutter vào Podfile nếu bạn sử dụng Flutter
  flutter_install_all_ios_pods(File.dirname(File.realpath(__FILE__)))
end
