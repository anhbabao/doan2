-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2022 at 05:30 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nbook`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `idbook` varchar(50) NOT NULL,
  `name` text NOT NULL,
  `author` text NOT NULL,
  `publishdate` date NOT NULL,
  `idcategory` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `status` text NOT NULL,
  `imgurl` text NOT NULL,
  `description` text NOT NULL,
  `number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`idbook`, `name`, `author`, `publishdate`, `idcategory`, `price`, `status`, `imgurl`, `description`, `number`) VALUES
('s001', 'Đi Tìm Lẽ Sống (Tái Bản) ', 'Viktor E  Frankl ', '2022-05-11', 'tl', 624000, 'Sẵn  hàng', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935086847695.jpg', '<h2>ĐI TÌM LẼ SỐNG CỦA VIKTOR FRANKL LÀ MỘT TRONG NHỮNG QUYỂN SÁCH KINH ĐIỂN CỦA THỜI ĐẠI.</h2>\r\n\r\n<p>Thông thường, nếu một quyển sách chỉ có một đoạn văn, một ý tưởng có sức mạnh thay đổi cuộc sống của một người, thì chỉ riêng điều đó cũng đã đủ để chúng ta đọc đi đọc lại và dành cho nó một chỗ trên kệ sách của mình. Quyển sách này có nhiều đoạn văn  như thế.</p>\r\n\r\n<p>Trước hết, đây là quyển sách viết về sự sinh tồn. Giống như nhiều người Do Thái sinh sống tại Đức và Đông Âu khi ấy, vốn nghĩ rằng mình sẽ được an toàn trong những năm 1930, Frankl đã trải qua khoảng thời gian chịu nhiều nghiệt ngã trong trại tập trung và trại hủy diệt của Đức quốc xã. Điều kỳ diệu là ông đã sống sót, cụm từ “thép đã tôi thế đấy” có thể lột tả chính xác trường hợp này. Nhưng trong Đi tìm lẽ sống, tác giả ít đề cập đến những khó nhọc, đau thương, mất mát mà ông đã trải qua, thay vào đó ông viết về những nguồn sức mạnh đã giúp ông tồn tại.</p>', 100),
('s002', 'Lớp Học Mật Ngữ - Tập 20 - Tặng Kèm Thỏi Hồ/Keo Khô Cộp Mác Lớp Học Mật Ngữ', 'B R O group', '2022-05-01', 'tn', 40000, 'Sẵn hàng', 'https://cdn0.fahasa.com/media/catalog/product/c/o/cover_lhmn20.jpg', '<h2>Khu Rừng Kim Cương - Rực sắc xanh lá nhưng đừng vội xa lánh</h2>\r\n\r\n<p>\r\nSau khi tiết lộ bí mật động trời cho Xử Nữ nữ, lớp Hoàng Đạo vô cùng áy náy. Sư Tử nam quyết định bù đắp cho Xử Nữ, bằng cách rủ cả lớp đi chơi Khu Rừng Kim Cương. Với hy vọng, Xử Nữ vừa được “sống trong bể ngọc kim cương”, vừa “sống giữa tình thương bạn bè”. Thậm chí, Sư Tử nam sáng tạo ra quà đặc biệt để dành riêng cho Xử Nữ nữ. Thế nhưng, Xử Nữ nữ vẫn buồn rầu vì cảm thấy không được là chính mình...</p>\r\n\r\n<p>Trước hết, đây là quyển sách viết về sự sinh tồn. Giống như nhiều người Do Thái sinh sống tại Đức và Đông Âu khi ấy, vốn nghĩ rằng mình sẽ được an toàn trong những năm 1930, Frankl đã trải qua khoảng thời gian chịu nhiều nghiệt ngã trong trại tập trung và trại hủy diệt của Đức quốc xã. Điều kỳ diệu là ông đã sống sót, cụm từ “thép đã tôi thế đấy” có thể lột tả chính xác trường hợp này. Nhưng trong Đi tìm lẽ sống, tác giả ít đề cập đến những khó nhọc, đau thương, mất mát mà ông đã trải qua, thay vào đó ông viết về những nguồn sức mạnh đã giúp ông tồn tại.</p>', 100),
('s003', 'Bé Tập Kể Chuyện - Gà Tơ Đi Học', 'Nhiều Tác Giả', '2022-05-01', 'tn', 8500, 'Sẵn hàng', 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_83817.jpg', '<h2>Khu Rừng Kim Cương - Rực sắc xanh lá nhưng đừng vội xa lánh</h2>\r\n\r\n<p>\r\nSau khi tiết lộ bí mật động trời cho Xử Nữ nữ, lớp Hoàng Đạo vô cùng áy náy. Sư Tử nam quyết định bù đắp cho Xử Nữ, bằng cách rủ cả lớp đi chơi Khu Rừng Kim Cương. Với hy vọng, Xử Nữ vừa được “sống trong bể ngọc kim cương”, vừa “sống giữa tình thương bạn bè”. Thậm chí, Sư Tử nam sáng tạo ra quà đặc biệt để dành riêng cho Xử Nữ nữ. Thế nhưng, Xử Nữ nữ vẫn buồn rầu vì cảm thấy không được là chính mình...</p>\r\n\r\n<p>Trước hết, đây là quyển sách viết về sự sinh tồn. Giống như nhiều người Do Thái sinh sống tại Đức và Đông Âu khi ấy, vốn nghĩ rằng mình sẽ được an toàn trong những năm 1930, Frankl đã trải qua khoảng thời gian chịu nhiều nghiệt ngã trong trại tập trung và trại hủy diệt của Đức quốc xã. Điều kỳ diệu là ông đã sống sót, cụm từ “thép đã tôi thế đấy” có thể lột tả chính xác trường hợp này. Nhưng trong Đi tìm lẽ sống, tác giả ít đề cập đến những khó nhọc, đau thương, mất mát mà ông đã trải qua, thay vào đó ông viết về những nguồn sức mạnh đã giúp ông tồn tại.</p>', 100),
('s004', 'Nhà Giả Kim (Tái Bản 2020)', 'Paulo Coelho', '2019-05-22', 'vh', 67150, 'Sẵn hàng', 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_36793.jpg', '<h2>Khu Rừng Kim Cương - Rực sắc xanh lá nhưng đừng vội xa lánh</h2>\r\n\r\n<p>\r\nSau khi tiết lộ bí mật động trời cho Xử Nữ nữ, lớp Hoàng Đạo vô cùng áy náy. Sư Tử nam quyết định bù đắp cho Xử Nữ, bằng cách rủ cả lớp đi chơi Khu Rừng Kim Cương. Với hy vọng, Xử Nữ vừa được “sống trong bể ngọc kim cương”, vừa “sống giữa tình thương bạn bè”. Thậm chí, Sư Tử nam sáng tạo ra quà đặc biệt để dành riêng cho Xử Nữ nữ. Thế nhưng, Xử Nữ nữ vẫn buồn rầu vì cảm thấy không được là chính mình...</p>\r\n\r\n<p>Trước hết, đây là quyển sách viết về sự sinh tồn. Giống như nhiều người Do Thái sinh sống tại Đức và Đông Âu khi ấy, vốn nghĩ rằng mình sẽ được an toàn trong những năm 1930, Frankl đã trải qua khoảng thời gian chịu nhiều nghiệt ngã trong trại tập trung và trại hủy diệt của Đức quốc xã. Điều kỳ diệu là ông đã sống sót, cụm từ “thép đã tôi thế đấy” có thể lột tả chính xác trường hợp này. Nhưng trong Đi tìm lẽ sống, tác giả ít đề cập đến những khó nhọc, đau thương, mất mát mà ông đã trải qua, thay vào đó ông viết về những nguồn sức mạnh đã giúp ông tồn tại.</p>', 100),
('s005', 'Sách Giáo Khoa Bộ Lớp 8 - Sách Bài Học (Bộ 13 Cuốn) (2022) + 2 Cuộn Bao Sách Nylon TP', 'Nhiều Tác Giả', '2019-05-22', 'vh', 67150, 'Sẵn hàng', 'https://cdn0.fahasa.com/media/catalog/product/3/3/3300000015361.jpg', '<h2>Khu Rừng Kim Cương - Rực sắc xanh lá nhưng đừng vội xa lánh</h2>\r\n\r\n<p>\r\nSau khi tiết lộ bí mật động trời cho Xử Nữ nữ, lớp Hoàng Đạo vô cùng áy náy. Sư Tử nam quyết định bù đắp cho Xử Nữ, bằng cách rủ cả lớp đi chơi Khu Rừng Kim Cương. Với hy vọng, Xử Nữ vừa được “sống trong bể ngọc kim cương”, vừa “sống giữa tình thương bạn bè”. Thậm chí, Sư Tử nam sáng tạo ra quà đặc biệt để dành riêng cho Xử Nữ nữ. Thế nhưng, Xử Nữ nữ vẫn buồn rầu vì cảm thấy không được là chính mình...</p>\r\n\r\n<p>Trước hết, đây là quyển sách viết về sự sinh tồn. Giống như nhiều người Do Thái sinh sống tại Đức và Đông Âu khi ấy, vốn nghĩ rằng mình sẽ được an toàn trong những năm 1930, Frankl đã trải qua khoảng thời gian chịu nhiều nghiệt ngã trong trại tập trung và trại hủy diệt của Đức quốc xã. Điều kỳ diệu là ông đã sống sót, cụm từ “thép đã tôi thế đấy” có thể lột tả chính xác trường hợp này. Nhưng trong Đi tìm lẽ sống, tác giả ít đề cập đến những khó nhọc, đau thương, mất mát mà ông đã trải qua, thay vào đó ông viết về những nguồn sức mạnh đã giúp ông tồn tại.</p>', 100),
('s006', 'Tiền Đẻ Ra Tiền - Đầu Tư Tài Chính Thông Minh', 'Duncan Bannatyne', '2020-05-04', 'kt', 96000, 'Sẵn sàng', 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_47056.jpg', '<h2>Sau sự thành công của hai cuốn sách “Thức tỉnh và thay đổi cuộc đời bạn: Bí quyết thành công của triệu phú Anh” và “Quản lý thời gian thông minh của người thành đạt: Bí quyết thành công của triệu phú Anh” là những câu chuyện, những lời khuyên dựa trên những kinh nghiệm phong phú của cuộc đời mình và nhằm mục đích truyền cảm hứng động lực làm giàu cho mọi công dân đều có thể trở thành triệu phú, thì triệu phú người Anh và tác giả của nhiều đầu sách nổi tiếng Duncan Bannatyne đã cho ra mắt cuốn sách “ Tiền Đẻ Ra Tiền – Đầu Tư Tài Chính Thông Minh”.</h2>\r\n\r\n<p>Có điều gì đặc biệt ở cuốn sách “ Tiền Đẻ Ra Tiền” ?</p>', 100),
('s007', 'Cách Tư Duy Và Giao Dịch Như Một Nhà Vô Địch Đầu Tư Chứng Khoán (Tặng Kèm 1 Sổ Tay Mẫu Ngẫu Nhiên)', 'Nhà Sách Lộc', '2022-05-11', 'kt', 348000, 'Sẳn hàng', 'https://salt.tikicdn.com/cache/400x400/ts/product/5b/b3/e2/f6ae14b5855e2429373d85448036cdc4.jpg.webp', 'Mô Tả Sản Phẩm\r\nCÁCH TƯ DUY VÀ GIAO DỊCH NHƯ MỘT NHÀ VÔ ĐỊCH ĐẦU TƯ CHỨNG KHOÁN ', 100),
('s008', 'Chú Thuật Hồi Chiến: Tập 2', 'NXB Kim Đồng', '0000-00-00', 'tn', 27000, 'Sẵn hàng', 'https://salt.tikicdn.com/cache/400x400/ts/product/f6/31/92/989371cd53ac84a1baa221c7932b6b6e.png.webp', 'Itadori Yuji là một học sinh cấp Ba sở hữu năng lực thể chất phi thường. Hằng ngày cậu thường tới bệnh viện chăm người ông đang ốm liệt giường. Nhưng một ngày nọ, phong ấn của “chú vật” vốn ngủ yên trong trường bị phá giải, quái vật xuất hiện. Để cứu hai anh chị khóa trên đang gặp nguy hiểm, Itadori đã xông vào trường và  Phần chính truyện của CHÚ THUẬT HỒI CHIẾN - Series bom tấn đã bán ra hơn 30 triệu bản tại Nhật năm 2021, bắt đầu…!!', 100);

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `username` varchar(50) NOT NULL,
  `idbook` varchar(50) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`username`, `idbook`, `quantity`) VALUES
('nga', 's002', 1),
('nguyennga', 's002', 2),
('nguyennga', 's008', 1),
('thanhtungetm', 's002', 1);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `idcategory` varchar(50) NOT NULL,
  `name` text NOT NULL,
  `imgurl` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`idcategory`, `name`, `imgurl`) VALUES
('kt', 'Kinh tế', 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_47056.jpg'),
('tl', 'Tâm lý', 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935086847695.jpg'),
('tn', 'Thiếu nhi', 'https://cdn0.fahasa.com/media/catalog/product/0/5/05b0dc68643430dd9e28edb7a04c4d62_2_1.jpg'),
('vh', 'Văn học', 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_217480.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `coupon`
--

CREATE TABLE `coupon` (
  `code` varchar(50) NOT NULL,
  `percent` float NOT NULL,
  `startday` date NOT NULL,
  `endday` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `coupon`
--

INSERT INTO `coupon` (`code`, `percent`, `startday`, `endday`) VALUES
('Hi', 0.3, '2022-05-11', '2022-05-18'),
('trian', 1, '2022-05-08', '2022-05-25'),
('xinchao', 0.5, '2022-05-10', '2022-05-31');

-- --------------------------------------------------------

--
-- Table structure for table `orderdetail`
--

CREATE TABLE `orderdetail` (
  `idorder` varchar(50) NOT NULL,
  `idbook` varchar(50) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderdetail`
--

INSERT INTO `orderdetail` (`idorder`, `idbook`, `quantity`) VALUES
('1j72kb1jwl3mnhjgy', 's002', 5),
('1j72kb71cl3loep7h', 's001', 2),
('1j72kb71cl3loep7h', 's004', 10),
('1j72kb78gl3mvry7e', 's002', 5),
('1j72kb78gl3mvry7e', 's008', 1),
('1j72kb8mwl3ivc7u3', 's002', 3),
('1j72kb8mwl3ivc7u3', 's006', 3),
('1j72kb8mwl3ivcv9q', 's006', 5),
('1j72kb8n4l3onas2g', 's002', 1),
('1j72kb98kl3ivymnw', 's001', 2);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `idorder` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `purchasedate` date NOT NULL DEFAULT current_timestamp(),
  `deliverydate` date DEFAULT NULL,
  `status` text NOT NULL,
  `discount` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`idorder`, `username`, `purchasedate`, `deliverydate`, `status`, `discount`) VALUES
('1j72kb1jwl3mnhjgy', 'nguyennga', '2022-05-26', '2022-05-26', 'Chờ xác nhận', 'xinchao'),
('1j72kb71cl3loep7h', 'nguyennga', '2022-05-25', '2022-05-25', 'Chờ xác nhận', 'xinchao'),
('1j72kb78gl3mvry7e', 'nguyennga', '2022-05-26', '2022-05-26', 'Chờ xác nhận', 'hi'),
('1j72kb8mwl3ivc7u3', 'nguyennga', '2022-05-23', '2022-05-23', 'Chờ xác nhận', NULL),
('1j72kb8mwl3ivcv9q', 'nguyennga', '2022-05-23', '2022-05-23', 'Chờ xác nhận', 'xinchao'),
('1j72kb8n4l3onas2g', 'thanhtungetm', '2022-05-27', '2022-05-27', 'Chờ xác nhận', NULL),
('1j72kb98kl3ivymnw', 'nguyennga', '2022-05-23', '2022-05-23', 'Chờ xác nhận', 'trian');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `name` text NOT NULL,
  `phone` text NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`username`, `password`, `name`, `phone`, `address`) VALUES
('admin', '21232f297a57a5a743894a0e4a801fc3', 'ADMIN Nguyen Nga', '086999999', 'Thoại giang'),
('nga', '202cb962ac59075b964b07152d234b70', 'Nga', '1234', 'Thoai Giang'),
('nguyennga', '202cb962ac59075b964b07152d234b70', 'Nguyen Nga', '123423123', 'An Giang'),
('thanhtungetm', 'e02c85c710255a33bafb6c29c661d8c0', 'Thanh Tung', '0868378827', 'Can Tho');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`idbook`),
  ADD KEY `idcategory` (`idcategory`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`username`,`idbook`),
  ADD KEY `idbook` (`idbook`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`idcategory`);

--
-- Indexes for table `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`code`);

--
-- Indexes for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD PRIMARY KEY (`idorder`,`idbook`),
  ADD KEY `idbook` (`idbook`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`idorder`),
  ADD KEY `username` (`username`),
  ADD KEY `orders_ibfk_1` (`discount`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `book_ibfk_1` FOREIGN KEY (`idcategory`) REFERENCES `category` (`idcategory`);

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`username`) REFERENCES `user` (`username`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`idbook`) REFERENCES `book` (`idbook`);

--
-- Constraints for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD CONSTRAINT `orderdetail_ibfk_1` FOREIGN KEY (`idbook`) REFERENCES `book` (`idbook`),
  ADD CONSTRAINT `orderdetail_ibfk_2` FOREIGN KEY (`idorder`) REFERENCES `orders` (`idorder`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`discount`) REFERENCES `coupon` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`username`) REFERENCES `user` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
